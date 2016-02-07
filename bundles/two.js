var React = require("react");
var ReactDOM = require("react-dom");
var two = require("../components/two_page.jsx");

window.onload = function() {
  ReactDOM.render(
    React.createElement(one),
    document.getElementById("entry"));
}
