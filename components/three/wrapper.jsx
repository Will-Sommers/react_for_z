var React = require("react");
var _ = require("underscore");

var Wrapper = React.createClass({
  render: function() {
    return <div>
      <div>I am a wrapper component</div>
      {this.props.children} 
    </div>
  }
});

module.exports = Wrapper;
