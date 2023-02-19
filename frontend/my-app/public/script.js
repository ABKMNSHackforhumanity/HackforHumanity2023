const fetch = require("node-fetch");
const json = require("json");
//import

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//set up URL
var street = urlParams.get('adrssearch');
city = urlParams.get('citysearch');
var url = "https://localhost:3000/?adrssearch=" + street +"&citysearch=" + city;

function GetAPI(){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.water) {
            document.getElementById("water").innerHTML = JSON.stringify(data.water);
        }
    })
    .catch((error) => console.log('error', error));
    
}