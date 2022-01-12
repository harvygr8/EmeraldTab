<script>
	import Clock from './components/Clock.svelte'
	import Date from './components/Date.svelte'
	import Links from './components/Links.svelte'
	import Weather from './components/Weather.svelte'
	import Settings from './components/Settings.svelte'

	let bgcolor="#292524";
	let show=false;
	let rld=false;
	let showAppDebug=false;

	chrome.storage.local.get(['bgcolor1'],function(result){
		if(!result.bgcolor1)
		{
			if(showAppDebug) console.log("NO COLOR VALUE FOUND , SETTING BGCOLOR");
			chrome.storage.local.set({bgcolor1:'#292524'});
			window.location.reload(true);
		}
		else{
			if(showAppDebug) console.log("FOUND COLOR VALUE");
			bgcolor=result.bgcolor1;
			document.getElementById('maindiv').style.backgroundColor = bgcolor;
		}
	});


	const showSettings=()=>{
		if(document.getElementById('set').style.visibility === "hidden"){
			document.getElementById('set').style.visibility = "visible";
		}
		else{
			document.getElementById('set').style.visibility = "hidden"
		}
	}

</script>

<main id="maindiv" class="font-customfont flex h-screen justify-center" style="background-color:{bgcolor}">
	<div class="m-auto flex flex-col justify-center items-center">
		<Clock />
		<div class="mt-4 flex flex-row justify-center items-center">
			<Date />
			<p class="text-xl ml-2 text-white"> | </p>
			<Weather />
		</div>
		<Links />
	</div>
	<div class="fixed">
	<div class="flex flex-row justify-items-center">
		<button class="text-white" on:click={() => showSettings()} >Settings </button>
		<p class="text-xs ml-2 text-white"> | </p>
		<a class="ml-2 text-white" href="https://open-meteo.com/"> Weather data by Open-Meteo.com</a>
		<p class="text-xs ml-2 text-white"> | </p>
		<a class="ml-2 text-white" href="https://fontawesome.com/"> Icons from font awesome</a>
	</div>
		<div id="set" style="visibility:hidden">
			<Settings />
		</div>

	</div>

</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translateX(-50%) translateY(-50%);
		-webkit-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
	}

</style>
