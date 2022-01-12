<script>

let temp=-1;
const refreshTime = 30;
const showDebug=false;

const startRoutine=(lt,ln)=>{
  if(showDebug) console.log("Got Values: "+lt+" "+ln);
  let url = "https://"+"api.open-meteo.com/v1/forecast?latitude="+lt+"&longitude="+ln+"&current_weather=true";
  if(showDebug) console.log("Got Url: "+url);
  chrome.storage.local.get(['lastFetchT'], function(result){
    if(result.lastFetchT){
      let ftime = result.lastFetchT;
      let today = new Date()
      let diff = getDiff(ftime,today.getTime())
      if(showDebug) console.log(`Last Fetch was ${diff} minute(s) ago`);
      if(diff>refreshTime){
      fetch(url)
      .then(response => response.json())
      .then(data =>{
          let ftime = new Date();
          if(showDebug) console.log("Requesting Data from API")
          temp = data.current_weather.temperature;
          chrome.storage.local.set({lastFetchT:ftime.getTime()})
          chrome.storage.local.set({lastFetchW:temp})
        });
      }
      else{
        if(showDebug) console.log("Didnt fetch");
        chrome.storage.local.get(['lastFetchW'], function(result) {
        if(!result.lastFetchW){
          if(showDebug) console.log('No Recent Weather data,Fetching...');
          fetch(url)
          .then(response => response.json())
          .then(data =>{
            let ftime = new Date();
            console.log("API CALLED")
            temp = data.current_weather.temperature;
            chrome.storage.local.set({lastFetchT:ftime.getTime()});
            chrome.storage.local.set({lastFetchW:temp});
          });
        }
        else{
          if(showDebug) console.log('Recent weather data Found');
          temp = result.lastFetchW;
        }
        });

      }
    }
    else{
      let ftime = new Date();
      if(showDebug) console.log("No previous fetch time found , adding one");
      chrome.storage.local.set({lastFetchT:ftime.getTime()});
      fetch(url)
      .then(response => response.json())
      .then(data =>{
        let ftime = new Date();
        if(showDebug) console.log("Requesting Data from API")
        temp = data.current_weather.temperature;
        chrome.storage.local.set({lastFetchW:temp})
      });
    }
  });
}

const getDiff=(dt2,dt1)=>{
  var diff =(dt2 - dt1) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

const successCallback=(position)=>{
    if(showDebug) console.log("Getting Location");
    chrome.storage.local.set({latitudePce:position.coords.latitude,longitudePce:position.coords.longitude},function(){
      let lt=position.coords.latitude;
      let ln=position.coords.longitude
      startRoutine(lt,ln);
    });
}

const errorCallback=(err)=>{
  console.log(err);
}

chrome.storage.local.get(['latitudePce','longitudePce'], function (result){
  if(!result.latitudePce || !result.longitudePce){
     if(showDebug) console.log("Missing Location Values");
     navigator.geolocation.getCurrentPosition(successCallback , errorCallback);
  }
  else{
    if(showDebug) console.log("Found Location Values");
    chrome.storage.local.get(['latitudePce','longitudePce'],function(result){
      let lt = result.latitudePce;
      let ln = result.longitudePce;
      startRoutine(lt,ln);
    });
  }
});



</script>


<div class="ml-2">
  <p class="text-2xl text-white p-2">{temp}°C</p>
</div>
