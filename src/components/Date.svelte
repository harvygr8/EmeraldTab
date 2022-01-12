<script>

const d = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];

let dateN = d.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];

let year = d.getFullYear();

let abrv;

switch(dateN){
  case 1:
    abrv = "st";
    break;
  case 2:
    abrv = "nd";
    break;
  case 3:
    abrv = "rd";
    break;
  default:
    abrv = "th"
}

if(dateN===1) abrv="st";
if(dateN===2) abrv="nd";
if(dateN==3) abrv="rd";
if(dateN>3) abrv="th";

let currDate= `${day}, ${dateN}${abrv} ${month}`;

</script>



<div>

<p class="text-2xl text-white p-2" style="text-transform:uppercase">{currDate}</p>

</div>
