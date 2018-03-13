import React from 'react';
import '../styles/WeatherCard.css';

class WeatherCard extends React.Component {
  render() {
    const {
          day, high, low, icon, isLoaded, tempUnit, 
          } = this.props;

    const tempHigh = tempUnit === 'F' ? high.fahrenheit : high.celsius;
    const tempLow = tempUnit === 'F' ? low.fahrenheit : low.celsius;

    return (
      <div>
        {
          isLoaded && (
            <div className="weather-card">
              <p className="weather-card__day">{day}</p>
              <img src={icon} alt="forecast icon" className="weather-card__icon" />
              <section className="weather-card__temp">
                <p className="weather-card__temp-high" >{tempHigh}&deg;</p>
                <p className="weather-card__temp-low" >{tempLow}&deg;</p>
              </section>
            </div>
          )
        }
      </div>
    );
  }
}

export default WeatherCard;
