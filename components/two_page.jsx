var React = require("react");
var _ = require("underscore");

var TwoPage = React.createClass({

  getInitialState: function() {
    console.log("init");
    return {
      count: 1
    }
  },

  componentWillMount: function() {
    console.log("willMount");
  },

  componentDidMount: function() {
    console.log("DidMount");

    // Ajax generally goes here as does anything
    // which touches the dom or makes network requests
    // from the client.
    var ctx = this;
    window.setInterval(function() {
      var count = ctx.state.count;
      count++;
      ctx.setState({ count:  count });
    }, 1500)
  },
  
  render: function() {
    console.log("render");
    return <div>
      <div>Count</div>
      <div>{this.state.count}</div> 
    </div>
  }
});

module.exports = TwoPage;
