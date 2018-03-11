import React from 'react';
import '../styles/WeatherCard.css';
import icon from '../assets/weather-icon.png';

class WeatherCard extends React.Component {
  render() {
    console.log(this.props.data[0]);
    // const high = this.props.data[0].main.temp_max;

    return (
      <div className="weather-card">
        <p className="weather-card__day" />
        <img src={icon} alt="weather icon" className="weather-card__icon" />
        <section className="weather-card__temp">
          <p className="weather-card__temp-high">&deg;</p>
          <p className="weather-card__temp-low">&deg;</p>
        </section>
      </div>
    );
  }
}

export default WeatherCard;
