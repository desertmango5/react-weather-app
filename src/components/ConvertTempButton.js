import React from 'react';
import '../styles/ConvertTemp.css';

class ConvertTempButton extends React.Component {
  render() {
    const {
          units, isLoaded, toggleUnits,
          } = this.props;
    const unitToggle = units === 'F' ? 'fahrenheit' : 'celsius';
    const unit = units === 'F' ? 'F' : 'C';

    return (
      <div className="button">
        {
          isLoaded && (
            <div 
              onClick={toggleUnits}
              className="convert__annimation"
            >
              <span className={unitToggle}>&deg;{unit}</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default ConvertTempButton;
