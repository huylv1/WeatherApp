var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherForcast = require('openWeatherForcast');
var ErrorModal = require('ErrorModal');
var createReactClass = require('create-react-class');

import { parse } from 'query-string';

var Weather = createReactClass({
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage : undefined
        }
    },
    updateNewData: function (data) {
        var that = this;        
        that.setState({
            isLoading : true
        });

        openWeatherForcast
            .getTemp(data.city)
            .then(function (res) {
                that.setState({
                    isLoading : false,
                    city: res.name, 
                    temp: res.temp,                    
                })
            }, function (err) {                
                that.setState({
                    isLoading : false,
                    city: undefined, 
                    temp: undefined, 
                    errorMessage : err.message
                });
            })
    },
    componentDidMount: function() {
        const query = parse(this.props.location.search);        
        if (typeof query.city === 'string' && query.city.length > 0) {
            this.updateNewData({city : query.city});
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps : function(props) {
        const query = parse(props.location.search);
        if (typeof query.city === 'string' && query.city.length > 0) {
            this.updateNewData({city : query.city});
            window.location.hash = '#/';
        }
    },
    renderMessage: function () {                
        var {isLoading, city, temp, errorMessage} = this.state;
        if (isLoading) {
            return <div>Loading data ...</div>
        } else if (city && temp) {
            return <WeatherMessage city={city} temp={temp}/>;
        }
                
        if (errorMessage) {
            return <ErrorModal message={errorMessage}/>
        }
    },
    render: function () {        
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewData={this.updateNewData}/>
                {this.renderMessage()}                
            </div>
        )
    }
})

module.exports = Weather