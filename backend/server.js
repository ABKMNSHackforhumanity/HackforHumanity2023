const fetch = require("node-fetch");
const json = require("json");

var street;
var city;

var url = "https://geocoding.geo.census.gov/geocoder/geographies/address?street=" 
	+ street + "&city=" + city 
	+ "&state=CA&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json";

var requestOptions = {
    Method: 'GET'
};

//make query using fetch
var output = fetch(url, requestOptions)
	//.then -> go do something else and come back when previous call finished
	.then(response => response.json())
	.then(result => handleOutput(result))
	//catch all errors to not kill all
	.catch(error => console.log('error', error));

