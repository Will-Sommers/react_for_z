var React = require("react");
var _ = require("underscore");


var ChildElement = React.createClass({

  getInitialState: function() {
    return {
      isChanging: false
    }
  },

  componentDidMount: function() {
    var ctx = this;
    if (this.props.number === 3) {
      window.setInterval(function() {
        ctx.setState({ isChanging: !ctx.state.isChanging});
      }, 3000);
    }
  },
  
  render: function() {
    console.log(this.props.number) 
    return <div onClick={this.props.flipColor}>
      <div>
        {this.props.number}
      </div>
      <div style={{color: this.props.childColor}}>
        {this.state.isChanging.toString()}
      </div>
    </div>
  }
})

var one_page = React.createClass({
  getInitialState: function() {
    return {
      textColor: "red"
    }
  },

  flipColor: function() {
    var color;
    if (this.state.textColor === "red") {
      color = "blue"
    } else {
      color = "red"
    }
    this.setState({ textColor: color});
  },

  render: function() {
    var ctx = this;
    console.log("render");
    return <div>
      {_.map([1,2,3,4,5], function(i) {
        var childColor;
        if (i < 3) {
          childColor = ctx.state.textColor;
        } 

        return <ChildElement 
          number={i}
          key={i}
          childColor={childColor}
          flipColor={ctx.flipColor}
        />
      })}
    </div>
  }
})

module.exports = one_page;
