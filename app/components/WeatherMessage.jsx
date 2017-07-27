var React = require('react');
var WeatherMessage = (data) => (    
        <div>
            It's {data.temp} in {data.city}!
        </div>
    )


module.exports = WeatherMessage