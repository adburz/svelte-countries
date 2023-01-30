<script>
	import { onMount } from 'svelte';
	import { settings } from '../appsettings';
	import AutoComplete from 'simple-svelte-autocomplete';

	let countries;
	let selectedCountryName = null;

	onMount(async () => {
		countries = await fetch(settings.CountriesApiBaseUrl + '/all');
		countries = (await countries.json()).map((c) => c.name.common);
	});
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<div class="grid h-screen place-items-center">
	<p class="text-sky-400 text-8xl">Project Countries</p>
	<div class="grid grid-cols-2 gap-4 content-center">
		<div>
			<AutoComplete
				class="text-2xl border border-blue-500 rounded-full py-2 px-3"
				items={countries}
				bind:selectedItem={selectedCountryName}
				placeholder="Select Country"
			/>
		</div>
		<div>
			<a href="/{selectedCountryName}">
				<button
					class="text-1xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					disabled={selectedCountryName === null}
				>
					Get information!
				</button>
			</a>
		</div>
	</div>
</div>
