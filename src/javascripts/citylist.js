const React = require('react/addons');
const City = require("javascripts/city");

require("stylesheets/modules/citylist");

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const CityList = React.createClass({
  render () {
    var cityNodes = this.props.data.cities.map(function (city) {
      return (
        <City distance={city.properties.d} key={city.properties.city} >
          {city.properties.city}
        </City>
      );
    });
    return (
      <div className="citylist">
      <ReactCSSTransitionGroup transitionName={this.props.data.direction}>
        {cityNodes}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = CityList;
