const request = require('request');

//convert the user input to a string to be used in the url
//const breedName = process.argv.slice(2).toString();

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    
    if (error) { //handles request fails
      callback(error,null);
    } else {
      try {
        const data = JSON.parse(body)[0];
        callback(null,data.description);
      } catch (error) {
        callback(error,null);
      }
    }
    
  });
};

module.exports = {
  fetchBreedDescription,
};