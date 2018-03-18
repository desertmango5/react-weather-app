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
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/geolookup/conditions/q/autoip.json`)
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

  toggleUnits = () => {
    const unit = this.state.tempUnit === 'F' ? 'C' : 'F';
    this.setState({ tempUnit: unit });
  }


  render() {
    const { isLoaded, forecast, location } = this.state;
    const forecasts = forecast.simpleforecast;
    const results = !isLoaded ? 'result-loading' : 'result-loaded';
    const country = location.country_iso3166;

    return (
      <div className="App">
        {
          !isLoaded && (
            <h3 className="loading">
              Loading your data...
            </h3>
          )
        }
        <div className={results}>
          {
            isLoaded && (
              <div>
                <h1 className="title">4-Day Outlook</h1>
                <h3 className="location">
                  {location.city}, {country}
                </h3>
              </div>
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
            className="convert-button"
            toggleUnits={this.toggleUnits}
            units={this.state.tempUnit}
            isLoaded={this.state.isLoaded}
          />
        </div>
      </div>

    );
  }
}

export default App;
