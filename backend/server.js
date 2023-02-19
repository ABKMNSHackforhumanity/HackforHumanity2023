import adrs from 'Geospatial_Lead_Indicators.json' assert {type: 'JSON' };
import count from 'Geospatial_Lead_Indicators.json' assert {type: 'JSON' };

const fetch = require("node-fetch");
const json = require("json");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.put('/', (req, res) => {
	let input = req.body;
	res.send(identify(input['street'],input['city']))
})

app.post('/', (req, res) => {
	let input = req.body;
	res.send(identify(input['street'],input['city']))
})

function identify(streetIn, cityIn) {

	var data = {
		street: streetIn,
		city: cityIn,
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
	geoId = geoId.slice(0, 10);

	var length = parseInt(JSON.stringify(count))
	var start = 0;
	var end = length - 1;
	mid = (start + end) / 2
	while (start < mid) {
		if (geoId < JSON.stringify(adrs[mid]['tract']))
			start = mid + 1;
		else if (geoId > JSON.stringify(adrs[mid]['tract']))
			end = mid - 1;
		else
			break;

		mid = (start + end) / 2
	}
	return adrs[mid];
}