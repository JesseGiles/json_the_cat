// index.js
const { fetchBreedDescription } = require('./breedFetcher');
const requestedCat = process.argv[2];
const breedName = requestedCat.toString();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

