import React, { Component } from 'react';
import '../styles/default-styles.css';
import '../styles/App.css';
import { apiKey } from '../private';
import WeatherCard from './WeatherCard';
import ConvertTempButton from './ConvertTempButton';

class App extends Component {
  state = {               // eslint-disable-line no-alert
    isLoaded: false,
    error: null,
    tempUnit: 'F',
    current: {},
    location: {},
    forecast: {},
  };

  
  componentDidMount() {
    this.getWeather();
  };
  
  // connect to weather API
  getWeather = () => {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/q/az/phoenix.json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            current: result.current_observation,
            location: result.location,
            forecast: result.forecast,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  farhenheitUnits = () => {
    const unit = this.state.tempUnit === 'F' ? 'F' : 'F';
    this.setState({ tempUnit: unit });
  }
  
  celciusUnits = () => {
    const unit = this.state.tempUnit === 'C' ? 'C' : 'C';
    this.setState({ tempUnit: unit });
  }

  render() {
    const { isLoaded, forecast, location } = this.state;
    const forecasts = forecast.simpleforecast;

    return (
      <div className="App">
        <h1 className="title">4-Day Outlook</h1>
        {
          isLoaded && (
            <h3 className="location">
              {location.city}, {location.state}, {location.country}
            </h3>
          )
        }
        {
          !isLoaded && (
            <h3 className="loading">Loading...</h3>
          )
        }
        {
          isLoaded && (
            <div className="weather-cards">
              {forecasts.forecastday.map((data) => (
                <section key={data.period}>
                    <WeatherCard 
                      className="weather-card"
                      tempUnit={this.state.tempUnit}
                      isLoaded={this.state.isLoaded}
                      icon={data.icon_url}
                      high={data.high}
                      low={data.low}
                      day={data.date.weekday_short}
                    />
                </section>
              ))}
            </div>
          )
        }
        <ConvertTempButton 
          farhenheitUnits={this.farhenheitUnits}
          celciusUnits={this.celciusUnits}
          units={this.state.tempUnit}
          isLoaded={this.state.isLoaded}
        />
      </div>
    );
  }
}

export default App;
