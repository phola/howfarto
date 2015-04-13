const React = require("react");

require("stylesheets/modules/city");

const City = React.createClass({
  render () {
    return (
      <div className="city">
        <span className="sign">  {this.props.children.toString()}  {this.props.distance}km</span>
      </div>
    );
  }
});

module.exports = City;
