
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  if (breedName === "") {
    return callback('Please enter the type of cat to search.', null);
  }

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(`error encountered: ${error}`, null);
    }

    const data = JSON.parse(body); //convert html string of body received from request into a JSON object

    if (data.length === 0) {
      return callback('Cat not found in database.', null);
    } else {
      callback(null, data[0].description); //log a value of a set key in JSON obj
    }

  });

};

module.exports = { fetchBreedDescription };