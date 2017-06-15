let React = require('react');
let WeatherMessage = require('WeatherMessage');
let WeatherForm = require('WeatherForm');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    let _this = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(
      function(temp){
        _this.setState({
          location,
          temp,
          isLoading: false
        });
      }, function(errorMessage){
        this.setState({
          isLoading: false
        });
        alert(errorMessage);
      }
    );
  },
  render: function() {
    let {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading)
        return <h3 className="text-center">Fetching weather...</h3>;
      else if (location && temp)
        return <WeatherMessage location={location} temp={temp}/>;
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMessage() }
      </div>
    );
  }
});

module.exports = Weather;
