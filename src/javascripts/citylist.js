const React = require('react/addons');
const City = require("javascripts/city");

require("stylesheets/modules/citylist");

//using timeout solution see this issue : https://github.com/facebook/react/issues/1326
const ReactCSSTransitionGroup = require('javascripts/timeout-transition-group');

const CityList = React.createClass({
  render () {
    var cityNodes = this.props.data.cities.map(function (city) {
      return (
        <City distance={city.properties.d} key={city.properties.d} >
          {city.properties.city}
        </City>
      );
    });
    return (
      <div className="citylist">
      <ReactCSSTransitionGroup transitionName={this.props.data.direction} enterTimeout={500} leaveTimeout={500}>
        {cityNodes}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = CityList;
