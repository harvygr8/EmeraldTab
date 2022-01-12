<script>

let time = new Date();
let currTime= time.toTimeString().split(' ')[0];
setInterval(()=>{
  time = new Date();
  currTime = time.toTimeString().split(' ')[0];
},1000);

</script>



<div>
  <p class="text-9xl text-white rounded-md p-2">{currTime}</p>
</div>
