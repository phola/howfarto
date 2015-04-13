const React = require("react");

require("stylesheets/modules/header");
//require("stylesheets/utilities/clearfix");

const Header = React.createClass({
  render () {
    return (
      <div className="header u-clearfix">
        {this.props.data.location[0]} {this.props.data.location[1]} {this.props.data.bearing}
      </div>
    );
  }
});

module.exports = Header;
