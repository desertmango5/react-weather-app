import React from 'react';
import '../styles/WeatherCard.css';

class WeatherCard extends React.Component {
  render() {
    const high = this.props.forecasts.main.temp_max;
    const low = this.props.forecasts.main.temp_min;
    const {
            convertTempF, convertTempC, tempUnit, 
          } = this.props;
    const weather = this.props.forecasts.weather[0];

    return (
      <div className="weather-card">
        <p className="weather-card__day" />
        <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="forecast icon" className="weather-card__icon" />
        <section className="weather-card__temp">
          <p className="weather-card__temp-high">
            {tempUnit === 'F' ? `${convertTempF(high)}` : `${convertTempC(high)}`}&deg;
          </p>
          <p className="weather-card__temp-low">
            {tempUnit === 'F' ? `${convertTempF(low)}` : `${convertTempC(low)}`}&deg;
          </p>
        </section>
      </div>
    );
  }
}

export default WeatherCard;
