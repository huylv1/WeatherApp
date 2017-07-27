var React = require('react');
var {Switch, Route, NavLink} = require('react-router-dom');

var Weather = require("Weather");
var About = require("About");
var {Route, Switch} = require('react-router-dom');

var Nav = require("Nav");

const Layout = () => (
    <div>
             
        <Nav/>
        <div className="grid-x grid-padding-x small-up-2 medium-up-2 large-up-2 large-offset-4">
            <div className="cell text-center">
                <Switch>
                    <Route exact path="/" component={Weather}/>
                    <Route exact path="/about" component={About}/>                
                </Switch>
            </div>            
        </div>        
    </div>
);

module.exports = Layout;