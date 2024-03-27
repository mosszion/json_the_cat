const request = require('request');


//moving the request logic into a function

const fetchBreedDescription = function(breedName, callback) {
  
  const endPoint = 'https://api.thecatapi.com/v1/breeds/search';
  const catBreed = `${breedName}`;
  const url = `${endPoint}?q=${catBreed}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log("Error found:", error);
  
    }
    
    const data = JSON.parse(body);
  
    if (Array.isArray(data) && data.length === 0) {
      console.log('Cat breed not found.');
      return "test";
    }
    
    process.stdout.write(data[0].description);
    
  });

};

module.exports = {
  fetchBreedDescription
};

