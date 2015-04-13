const React = require("react");

require("stylesheets/base");

const Container = require("javascripts/container");

const Cities = require("data/cities");

React.render(<Container data={Cities} />, document.querySelector("#main"));
