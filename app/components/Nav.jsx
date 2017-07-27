var React = require('react');
var {Switch, Route, NavLink} = require('react-router-dom');
var createReactClass = require('create-react-class');

var Nav = createReactClass({
    handleForm: function(e) {        
        e.preventDefault();
        var location = this.refs.location.value;
        if (typeof location === 'string' && location.length > 0) {         
            var encodedLocation = encodeURIComponent(location);
            window.location.hash = "#/?city=" + location;
        }
    },
    render : function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">Weather App</li>
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}>Weather</NavLink>                    
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/about"
                            activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}>About</NavLink>
                    </li>                
                    </ul>
                </div>            

                <div className="top-bar-right">
                    <form onSubmit={this.handleForm}>
                        <ul className="menu">                        
                            <li><input type="search" placeholder="Search" ref="location"/></li>
                            <li><button className="button">Search</button></li>
                        </ul>
                    </form>
                </div>
            </div>   
        );
    }
})

module.exports = Nav;
