import React, { Component } from 'react';
import '../styles/default-styles.css';
import '../styles/App.css';
import WeatherCard from './WeatherCard';
import weatherData from '../data/weatherData';

class App extends Component {
  state = {
    weather: {},
  };

  componentDidMount() {
    this.setState({ weather: weatherData });
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
