import { settings } from '../../appsettings';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const countryResponse = await fetch(
		settings.CountriesApiBaseUrl + '/name/' + params.country
	).then((res) => {
		console.log(res);
		if (!res.ok) throw error(404, 'Not found');
		return res;
	});

	let countryData = (await countryResponse.json())[0];
	let currencyData = { Error: 'Could not load the currency data' };
	if (countryData.currencies != null) {
		let baseCurrency = Object.keys(countryData.currencies);
		await fetch(
			settings.CurrenciesApiBaseUrl +
				'latest/?' +
				settings.CurrectiesApiKey +
				'&base_currency=' +
				baseCurrency
		).then((res) => {
			if (!res.ok) {
				currencyData = { Error: 'Could not load the currency data' };
			} else {
				currencyData = res.json();
			}
		});
	}

	return {
		countryData: countryData,
		currencyData: currencyData
	};
};
