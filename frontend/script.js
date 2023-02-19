const fetch = require("node-fetch");
const json = require("json");
//import

//set up URL
var url = "http://localhost:5000/";

//set query method
var requestOptions = {
	method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // place is the json of street and city
    body: JSON.stringify(place),
};

//make query using fetch
var output = fetch(url, requestOptions)
	//.then -> go do something else and come back when previous call finished
	.then((response) => response.json())
	.then((result) => {
        console.log(result);
        if(result.jurisdiction) {
            console.log(result.jurisdiction);
        }
        if(result.indicators) {
            console.log(result.indicators);
        }
    })
	//catch all errors to not kill all
	.catch((error) => console.log('error', error))
