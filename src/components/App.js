import React, { Component } from 'react';
import '../styles/default-styles.css';
import '../styles/App.css';
import { apiKey } from '../private';
import WeatherCard from './WeatherCard';
import weatherData from '../data/weatherData';

class App extends Component {
  state = {
    weather: {},
  };

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&APPID=${apiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            weather: result,
          });
        }
      )
  };

  updateWeather = (data) => {
    this.setState({ weather: data });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">5-Day Forecast</h1>
        <section className="weather-cards">
          {Object.keys(this.state.weather).map(key => (
              <WeatherCard 
                key={key}
                id={key}
                data={this.state.weather[key]}
                className="weather-card"
              />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
