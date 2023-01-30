# svelte-countries

Countries project.

Project based on: Svelte, SvelteKit, JavaScript, HTML5, TailwindCSS, TypScript.
Idea of project is to get information about Countries using free API.

Used API:
https://restcountries.com/
https://freecurrencyapi.com/

## Requirements:
```
npm v9.3.1
node v18.13.0
```
## To run locally:
```
npm i
npm run dev
```
## To run on docker:
```
docker build . -t countries
docker run -d -p 5050:5050 --name countries countries
```
