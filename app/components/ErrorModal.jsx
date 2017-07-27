var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
import PropTypes from 'prop-types'; // ES6
var createReactClass = require('create-react-class');

var ErrorModal = createReactClass({
    getDefaultProps : function() {
        return {
            title : 'Error'
        }
    },
    propTypes : {
        title: PropTypes.string,
        message: PropTypes.string.isRequired
    },
    componentDidMount : function() {
        var {title, message} = this.props;

        var modelMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                <button id="submit" className="button hollow" data-close="">
                    Okay
                </button>
                </p>
            </div>
        )

        var $modal = $(ReactDOMServer.renderToString(modelMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));        
        modal.open();
        
        
    },
    render : function() {
        return (
            <div></div>
        )
    }
})

module.exports = ErrorModal;