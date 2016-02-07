var React = require("react");
var _ = require("underscore");
var Wrapper = require("./three/wrapper.jsx");
var Inner = require("./three/inner.jsx");

var ThreePage = React.createClass({
  render: function() {
    return <div>
      <h1>I am a parent component</h1> 
      <Wrapper>
        <Inner />
      </Wrapper>
    </div>
  }
});

module.exports = ThreePage;
