<script>
	import { onMount } from 'svelte';
	import { settings } from '../appsettings';
	import AutoComplete from 'simple-svelte-autocomplete';

	let countries;
	let selectedCountryName = null;
	let countryData = null;

	onMount(async () => {
		countries = await fetch(settings.CountriesApiBaseUrl + '/all');
		countries = (await countries.json()).map((c) => c.name.common);
	});
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<div class="box">
	<AutoComplete
		items={countries}
		bind:selectedItem={selectedCountryName}
		placeholder="Select Country"
	/>
	<a href="/{selectedCountryName}">
		<button disabled={selectedCountryName === null}> Get information! </button>
	</a>
</div>

<style>
	.box {
		position: absolute;
		margin-top: 600px;
		margin-left: 1000px;
	}
</style>
