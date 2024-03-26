const request = require('request');

const getCmdArgs = process.argv.slice(2);
const endPoint = 'https://api.thecaapi.com/v1/breeds/search';
const catBreed = `${getCmdArgs[0]}`;
const url = `${endPoint}?q=${catBreed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Error found:", error);

  }
  
  const data = JSON.parse(body);

  if (Array.isArray(data) && data.length === 0) {
    console.log('Cat breed not found.');
    return;
  }
  
  process.stdout.write(data[0].description);
  
});
