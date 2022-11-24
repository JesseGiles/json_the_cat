const arrs = process.argv.slice(2);
const request = require('request');

const requestedCat = arrs.toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedCat}`, (error, response, body) => {
  if (error) {
    return console.log('statusCode:', response && response.statusCode, `\nerror encountered:`, error);
  }

  if (requestedCat === "") {
    return console.log('Please enter the type of cat to search.');
  }

  const data = JSON.parse(body); //convert html string of body received from request into a JSON object

  if (data.length === 0) {
    return console.log('Cat not found in database.');
  } else {
    console.log(data[0].description); //log a value of a set key in JSON obj
  }

});