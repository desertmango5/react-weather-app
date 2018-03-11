import React from 'react';
import '../styles/WeatherCard.css';
import icon from '../assets/weather-icon.png';

class WeatherCard extends React.Component {
  render() {
    const {
 day, high, low, 
} = this.props.data;

    return (
      <div className="weather-card">
        <p className="weather-card__day">{day}</p>
        <img src={icon} alt="weather icon" className="weather-card__icon" />
        <section className="weather-card__temp">
          <p className="weather-card__temp-high">{high}&deg;</p>
          <p className="weather-card__temp-low">{low}&deg;</p>
        </section>
      </div>
    );
  }
}

export default WeatherCard;
