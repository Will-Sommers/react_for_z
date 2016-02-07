var React = require("react");
var _ = require("underscore");

var Inner = React.createClass({
  render: function() {
    return <div>Hello, I am an inner Component.</div>
  }
});

module.exports = Inner;
