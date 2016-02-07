var React = require("react");
var ReactDOM = require("react-dom");
var three  = require("../components/three_page.jsx");

window.onload = function() {
  ReactDOM.render(
    React.createElement(three),
    document.getElementById("entry"));
}
