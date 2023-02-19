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
    body: JSON.stringify(place),
};

//make query using fetch
var output = fetch(url, requestOptions)
	//.then -> go do something else and come back when previous call finished
	.then((response) => response.json())
	.then((result) => {
        console.log(result);
        if(result.name) {
            document.getElementById("title").innerHTML = result.name;
        }
        if(result.data) {
            document.getElementById("content1").innerHTML = result.data;
        }
    })
	//catch all errors to not kill all
	.catch((error) => console.log('error', error))
