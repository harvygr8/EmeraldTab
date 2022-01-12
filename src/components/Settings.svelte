<script>

  const saveChanges = () =>{
    chrome.storage.local.set({bgcolor1:document.getElementById('bgColor-1').value},function(){
      window.location.reload(true);
    });
  }

</script>

<div class="mt-1 flex flex-col justify-center">

    <div class="mt-2 flex flex-row justify-center">
        <input style="padding:0;background:none;" class="rounded-sm" type="color" id="bgColor-1"/>
        <button class="ml-2 p-1 text-sm bg-emerald-500 rounded-md text-white" on:click={() => saveChanges()}>APPLY</button>
    </div>
</div>
