const React = require("react");
const Header = require("javascripts/header");
const CityList = require("javascripts/citylist");
const Compass = require("javascripts/compass");
const Footer = require("javascripts/footer");

require("stylesheets/modules/container");

const _ = require('lodash');
const turf = require("turf");
const geolocation = require('geolocation');


const Container = React.createClass({

            handleClick: function () {
              //  this.getCities(this.state.data.bearing + 1);
            },

            devOrientHandler: function (eventData) {
                var angle = Math.round(eventData.alpha);
                if (this.state.data.bearing !== eventData.alpha) {
                    this.getCities(angle);
                }
            },

            calcGeo: function () {
                var data = this.state.data;
                data.cities.features.forEach(v => {
                    v.properties.b = Math.round(turf.bearing(data.location, v));
                    v.properties.d = Math.round(turf.distance(data.location, v));
                });
                this.setState({
                    data: data
                });
            },


            getCities: function (bearing) {
                var data = this.state.data;
                data.direction = (data.bearing > bearing) ? 'l' : 'r';
                data.bearing = bearing;
                data.filtered = turf.filter(data.cities, "b", bearing).features;
                this.setState({
                    data: data
                });
            },


            getInitialState: function () {
                return {
                    data: {
                        filtered: [],
                        bearing: 50,
                        direction: 'l',
                        location: turf.random().features[0]
                    }
                };
            },

            componentDidMount: function () {
                var self = this;
                if (window.DeviceOrientationEvent) {
                    window.addEventListener('deviceorientation', _.throttle(self.devOrientHandler, 500,{
                                                            'trailing': true
                                                          }));

                }
                geolocation.getCurrentPosition(function (err, position) {
                    if (err)
                    {
                      throw err
                    }
                    else
                    {
                      self.setState({
                          data: {
                              cities: self.props.data,
                              location: turf.point([position.coords.longitude, position.coords.latitude]),
                              bearing: 60,
                              direction: 'l',
                              filtered: []
                          }
                      });
                    }
                    self.calcGeo();
                    self.getCities(60);
                });
            },

            render() {
                return (
                    <div className="container" onClick={this.handleClick}>
                            <Header data={{location:this.state.data.location.geometry.coordinates,bearing:this.state.data.bearing}} />
                            <div className="centre">
                              <div className="centrebody">
                            <Compass data={{bearing:this.state.data.bearing}} />
                            <CityList data={{cities:this.state.data.filtered,direction:this.state.data.direction}} />
                              </div>
                            </div>
                            <Footer />
                          </div> );

 }
 });

 module.exports = Container;
