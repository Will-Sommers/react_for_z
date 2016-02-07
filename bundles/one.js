var React = require("react");
var ReactDOM = require("react-dom");
var one = require("../components/one_page.jsx");

window.onload = function() {
  ReactDOM.render(
    React.createElement(one),
    document.getElementById("entry"));
}
