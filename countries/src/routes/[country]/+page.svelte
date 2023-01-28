<script>
	export let data;

	let countryData = data.countryData;
	let currencyData =
		data.currencyData.data != null
			? Object.entries(data.currencyData.data)
			: Object.entries(data.currencyData);

	function printLanguagesFromJson(json) {
		let languages = JSON.parse(json);
		let languageNames = Object.values(languages);
		return languageNames.join(', ');
	}

	function printArrayWithNamesAndSymbols(array) {
		let result = '';
		if (array == null) return result;
		if (array.length == 0) return result;
		let keys = Object.keys(array);
		keys.forEach((key, index) => {
			result += array[key].name + ' (' + array[key].symbol + ')' + (array.length > 0 ? ', ' : '');
		});
		return result;
	}
</script>

<svelte:head>
	<title>Countries</title>
</svelte:head>

<div>
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
	>
		<div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{countryData.name.common}
			</h2>
			<h3 class="text-xl tracking-tight text-gray-900 sm:text-xl">
				{countryData.translations.pol.common}
			</h3>
			<p class="mt-4 text-xl text-gray-500">Capital name: {countryData.capital}</p>
			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Official name</dt>
					<dd class="mt-2 text-sm text-gray-500">{countryData.name.official}</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Continents</dt>
					<dd class="mt-2 text-sm text-gray-500">{countryData.continents}</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Languages</dt>
					<dd class="mt-2 text-sm text-gray-500">
						{printLanguagesFromJson(JSON.stringify(countryData.languages))}
					</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Population</dt>
					<dd class="mt-2 text-sm text-gray-500">{countryData.population}</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Start of the week</dt>
					<dd class="mt-2 text-sm text-gray-500">{countryData.startOfWeek}</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Time zones</dt>
					<dd class="mt-2 text-sm text-gray-500">{countryData.timezones}</dd>
				</div>

				<div class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">Currencies</dt>
					<dd class="mt-2 text-sm text-gray-500">
						{printArrayWithNamesAndSymbols(countryData.currencies)}
					</dd>
				</div>
			</dl>
		</div>
		<div class="grid sm:gap-6 lg:gap-8">
			<img
				src={countryData.flags.svg}
				alt="Flag of {countryData.name.common}"
				class="p-1 rounded-lg bg-black"
			/>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6 sm:gap-y-16 lg:gap-x-8">
				{#each currencyData as currency}
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-900">{currency[0]}</dt>
						<dd class="mt-2 text-sm text-gray-500">{currency[1]}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
