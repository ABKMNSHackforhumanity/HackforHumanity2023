const fetch = require("node-fetch");
const json = require("json");

var data = {
	street: `${streetIn}`,
	city: `${cityIn}`,
	state: "CA",
	benchmark: "Public_AR_Census2020",
	vintage: "Census2020_Census2020",
	layers: "10",
	format: "json"
};

fetch("https://geocoding.geo.census.gov/geocoder/geographies/address", {
	method: "POST", // or 'PUT'
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
})
	.then((response) => response.json())
	.then((data) => {
		console.log("Success:", data);
	})
	.catch((error) => {
		console.error("Error:", error);
	});

var geoId = response['result']['geographies']['Census Blocks'][0]['GEOID'];
geoId = geoId.slice(0,10);