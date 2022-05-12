<script>

  const saveChanges = () =>{
    chrome.storage.local.set({bgcolor1:document.getElementById('bgColor-1').value},function(){
      window.location.reload(true);
    });
  }

  const saveFont = () =>{
    //console.log("Setting ShareTechMono");
    chrome.storage.local.set({font:'font-customfont'},function(){
      window.location.reload(true);
    });
  }

  const saveFont2 = () =>{
    //console.log("Setting Major Mono");
    chrome.storage.local.set({font:'font-customfont2'},function(){
      window.location.reload(true);
    });
  }

  const saveTimeFormat = () =>{
    //console.log("Setting Major Mono");
    chrome.storage.local.set({timeF:'24h'},function(){
      window.location.reload(true);
    });
  }

  const saveTimeFormat2 = () =>{
    //console.log("Setting Major Mono");
    chrome.storage.local.set({timeF:'12h'},function(){
      window.location.reload(true);
    });
  }

  const saveWeatherFormat = () =>{
    //console.log("Setting Major Mono");
    chrome.storage.local.set({weatherF:'cel'},function(){
      window.location.reload(true);
    });
  }

  const saveWeatherFormat2 = () =>{
    //console.log("Setting Major Mono");
    chrome.storage.local.set({weatherF:'far'},function(){
      window.location.reload(true);
    });
  }

</script>

<div class="uppercase mt-4 flex flex-row  justify-center">

  <!-- <fieldset class="mt-2 flex flex-col justify-center bg-wh">
    <legend class="text-white text-center mb-2 ">Font</legend>
    <button class=" p-1 text-xs border border-white hover:bg-emerald-600 rounded-md text-white" on:click={() => saveChanges()}>Share Tech Mono</button>
    <button class=" p-1 mt-1 text-xs border border-white hover:bg-emerald-600 rounded-md text-white" on:click={() => saveChanges()}>Major Mono Display</button>
  </fieldset> -->

    <div class="mb-1 flex flex-col justify-center ">
      <p class="mt-1 text-white text-center mb-1 underline">Colour</p>

        <!-- <input class="mx-2 p-1" style="padding:0;background:none;" type="color" id="bgColor-1"/>
        <button class="mx-2 p-1 text-xs border border-white hover:bg-emerald-600 rounded-md text-white" on:click={() => saveChanges()}>Apply</button> -->
        <input class="mt-2 mx-2 self-center" style="padding:0;background:none;" type="color" id="bgColor-1"/>
        <button class="uppercase mx-2 mt-2 p-1 mb-1 w-12 self-center text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveChanges()}>Apply</button>
    </div>

    <div class="ml-8 mt-1 mb-1 flex flex-col justify-center ">
      <p class="mt-1 text-white text-center mb-1 underline">Font</p>

      <button class="uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveFont()}>Share Tech Mono</button>
      <button class="uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveFont2()}>Roboto Mono</button>
    </div>

    <div class="ml-8 mt-1 mb-1 flex flex-col justify-center ">
      <p class="mt-1 text-white text-center mb-1 underline">Time</p>

      <button class="uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveTimeFormat()}>24 Hour</button>
      <button class="uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveTimeFormat2()}>12 Hour</button>
    </div>

    <div class="ml-8 mt-1 mb-1 flex flex-col justify-center ">
      <p class="mt-1 text-white text-center mb-1 underline">Weather</p>

      <button class="uppercase mt-2 mx-2 p-1 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveWeatherFormat()}>Celsius</button>
      <button class="uppercase mx-2 mt-2 p-1 mb-2 text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => saveWeatherFormat2()}>Farheneit</button>
    </div>

</div>
