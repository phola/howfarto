const React = require('react');

require("stylesheets/modules/compass");


const City = React.createClass({
  render () {
    var divStyle = {transform: 'rotate(-'+this.props.data.bearing+'deg)'};
    return (
      <div className="compass" style={divStyle} ></div>
    );
  }
});

module.exports = City;
