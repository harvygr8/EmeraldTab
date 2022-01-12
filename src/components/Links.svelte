<script>

let time = new Date();
let currTime= time.toTimeString().split(' ')[0];
setInterval(()=>{
  time = new Date();
  currTime = time.toTimeString().split(' ')[0];
},1000);




</script>

<div class = "mt-4 flex flex-row justify-center">
  <a class="text-1xl font-bold text-white rounded-md p-2" href="https://www.google.com/"><i class="fab fa-google fa-2x"></i></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.twitter.com/"><i class="fab fa-twitter fa-2x"></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.reddit.com/"><i class="fab fa-reddit-alien fa-2x"></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.linkedin.com/"><i class="fab fa-linkedin-in fa-2x"></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.twitch.com/"><i class="fab fa-twitch fa-2x"></a>
  <a class="ml-2 text-1xl font-bold text-white rounded-md p-2" href="https://www.youtube.com/"><i class="fab fa-youtube fa-2x"></a>
</div>
