var React = require('react');
var createReactClass = require('create-react-class');

var WeatherForm = createReactClass({
    onHandleForm: function (e) {
        e.preventDefault();

        var city = this.refs.city.value;
        if (typeof city === 'string' && city.length > 0) {
            this
                .props
                .onNewData({city: city})
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onHandleForm}>
                <input type="search" ref="city" placeholder="Search weather by city"/>
                <button className="button expanded hollow">Submit</button>
            </form>
        )
    }
})

module.exports = WeatherForm;