const request = require('request');

//convert the user input to a string to be used in the url
const breedName = process.argv.slice(2).toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) { //handles request fails
    console.log(error);
  } else {
    const data = JSON.parse(body)[0];
    try {
      console.log(data.description);
    } catch (error) {
      console.log('Information about the given breed is not available.');
    }
  }
  
});