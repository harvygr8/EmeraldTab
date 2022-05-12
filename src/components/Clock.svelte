<script>

let format;
let currTime="";
let time
let showClockDebug=false;
chrome.storage.local.get(['timeF'],function(result){
  if(!result.timeF)
  {
    if(showClockDebug) console.log("NO TIME FORMAT VALUE FOUND , SETTING FORMAT");
    chrome.storage.local.set({timeF:'24h'});
    window.location.reload(true);
  }
  else{
    if(showClockDebug) console.log("FOUND TIME FORMAT VALUE");
    format=result.timeF;

    time = new Date();

    if(format=='12h')
    {
      currTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true })
    }
    else if(format=='24h') {
      currTime= time.toTimeString().split(' ')[0];
    }

  }
});



setInterval(()=>{
  time = new Date();
  if(format=='12h')
  {
    currTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true })
  }
else if(format=='24h'){
    currTime= time.toTimeString().split(' ')[0];
  }

  //currTime = time.toTimeString().split(' ')[0];
},1000);

</script>



<div>
  <p class="text-7xl sm:text-8xl text-white rounded-md p-2">{currTime}</p>
</div>
