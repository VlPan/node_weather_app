const request = require('request');
const fs= require('fs');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true
}, (err, response, body)=>{
    // let stringBody = JSON.stringify(body, undefined, 2);
    // console.log(stringBody);
    console.log(`Adress: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});