let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/find?appid=e417626e284010f98cf05c81836165da';

// e417626e284010f98cf05c81836165da

module.exports = {
  getTemp: function(location){
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(response){
        if(response.data.cod > 299 && response.data.message)
          throw new Error(response.data.message);
        else
          return response.data.list[0].main.temp;
      }, function(error){
        throw new Error(error.data.message);
      }
    );
  }
};
