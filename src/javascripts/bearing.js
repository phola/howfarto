const React = require('react');

require("stylesheets/modules/bearing");


const City = React.createClass({
  render () {
    var divStyle = {opacity: 0.6};
    return (
      <div className="bearing" style={divStyle} >{this.props.data.bearing}</div>
    );
  }
});

module.exports = City;
