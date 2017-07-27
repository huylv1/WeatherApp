var axios = require('axios');

const OPEN_WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?APPID=b6063eff5a5ca97ed93740e8c854c3a6&q=";

module.exports = {
    getTemp : function(city) {
        var encodedCity = encodeURI(city);

        return axios.get(`${OPEN_WEATHER_API}${encodedCity}`)
            .then(function (response) {                            
                if (response.data.cod && response.data.message) {
                    throw new Error(response.data.message);
                } else {
                    return {temp : response.data.main.temp, name: response.data.name};
                }
            })
            .catch(function (error) {
                if (error.response) {
                    throw new Error(error.response.data.message);
                } else {
                    throw new Error(error.data.message);
                }
            });
    }
}