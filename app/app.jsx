var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter, Route,Router, NavLink,Switch} = require('react-router-dom');
var History = require('history');
const { createHashHistory } = History;


var Layout = require('Layout');

//Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <Router history={createHashHistory()}>
        <Route path="/" component={Layout} />
    </Router>
, document.getElementById('container'))