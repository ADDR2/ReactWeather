let React = require('react');
let WeatherMessage = require('WeatherMessage');
let WeatherForm = require('WeatherForm');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    let _this = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(
      function(temp){
        _this.setState({
          location,
          temp,
          isLoading: false
        });
      }, function(errorMessage){
        _this.setState({
          isLoading: false,
          errorMessage: errorMessage.message
        });
      }
    );
  },
  componentDidMount: function(){
    let location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    let {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading)
        return <h3 className="text-center">Fetching weather...</h3>;
      else if (location && temp)
        return <WeatherMessage location={location} temp={temp}/>;
    }

    function renderError (){
      if(typeof errorMessage === 'string')
        return <ErrorModal message={errorMessage}/>;
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMessage() }
        { renderError() }
      </div>
    );
  }
});

module.exports = Weather;
