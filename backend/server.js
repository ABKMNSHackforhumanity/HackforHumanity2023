const fetch = require("node-fetch");
const json = require("json");

var url

var requestOptions = {
    Method: 'GET'
};

//make query using fetch
var output = fetch(url, requestOptions)
	//.then -> go do something else and come back when previous call finished
	.then(response => response.json())
	.then(result => handleOutput(result))
	//catch all errors to not kill all
	.catch(error => console.log('error', error))

