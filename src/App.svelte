<script>
	import Clock from './components/Clock.svelte'
	import Date from './components/Date.svelte'
	import Links from './components/Links.svelte'
	import Weather from './components/Weather.svelte'
	import Settings from './components/Settings.svelte'

	let bgcolor="#292524";
	let font;
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

	chrome.storage.local.get(['font'],function(result){
		if(!result.font)
		{
			if(showAppDebug) console.log("NO FONT VALUE FOUND , SETTING DEFAULT");
			chrome.storage.local.set({font:'font-customfont'});
			window.location.reload(true);
		}
		else{
			if(showAppDebug) console.log("FOUND FONT VALUE");
			font=result.font;
		}
		if(showAppDebug) console.log(result.font);
	});


	const showMenu=()=>{

		if(document.getElementById('menu').style.visibility === "hidden" && document.getElementById('set').style.visibility === "hidden"){
			document.getElementById('menu').style.visibility = "visible";
			document.getElementById('set').style.visibility = "visible";
		}
		else{
			document.getElementById('menu').style.visibility = "hidden"
			document.getElementById('set').style.visibility = "hidden"
		}

	}

	const showSettings=()=>{

	}


</script>

<main id="maindiv" class="{font} font-thin flex h-screen justify-center" style="background-color:{bgcolor}">
	<div class="m-auto flex flex-col justify-center items-center">
		<Clock />
		<div class="mt-4 flex flex-row justify-center items-center">
			<Date />
			<p class="text-xl ml-2 text-white"> | </p>
			<Weather />
		</div>
		<Links />

		<!-- <button class="mt-8 uppercase text-white" on:click={() => showSettings()} ><i class="fas fa-cogs fa-2x"></i></button> -->
	</div>

	<div class="fixed">

	<div class="flex flex-row justify-center items-center">
		<button class="rounded-md hover:bg-white transition ease-in duration-200 uppercase mt-2 px-1 mb-1 self-center text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => showMenu()}><i class="fas fa-ellipsis-h fa-lg"></i></button>
		<!-- <button class="uppercase mt-2 ml-2 px-1 mb-1 self-center text-xs border border-white hover:font-bold rounded-sm text-white" on:click={() => showMenu()}><i class="fas fa-cogs text-white "></i></button> -->
	</div>

	<div id='menu' style="visibility:hidden" class="mt-2 border border-white px-2 py-2 rounded-md">
	<div id="set" style="visibility:hidden">
		<Settings />
	</div>

	<div class="mt-4 mb-1 uppercase flex flex-row justify-center items-center">
		<!-- <i class="fas fa-cogs fa-lg text-white "></i> <button class="hover:font-bold ml-2 rounded-md uppercase text-white" on:click={() => showSettings()} >Extension Settings</button>
		<p class="text-xs ml-2 text-white"> | </p> -->
		<!-- <a class="ml-2 text-white" href="https://open-meteo.com/"> Weather data by Open-Meteo.com</a> -->
		<i class="fas fa-cloud-sun-rain fa-lg text-white"></i> <a class="hover:font-bold rounded-md ml-2 text-white" href="https://open-meteo.com/"> Weather data by Open-Meteo.com </a>
		<p class="text-xs ml-2 text-white"> | </p>
		<!-- <a class="ml-2 text-white" href="https://fontawesome.com/"> Icons from font awesome</a> -->
		<i class="ml-2 fas fa-icons fa-lg text-white"></i> <a class="hover:font-bold rounded-md ml-2 text-white" href="https://fontawesome.com/"> Icons from font awesome</a>
	</div>
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
