let React = require('react');

/*let WeatherMessage = React.createClass({
  render: function() {
    let {location, temp} = this.props;
    return (
      <h3>It's {temp} degrees in {location}!</h3>
    );
  }
});*/

let WeatherMessage = ({location, temp}) => {
  return (
    <h3>It's {temp} degrees in {location}!</h3>
  );
};

module.exports = WeatherMessage;
