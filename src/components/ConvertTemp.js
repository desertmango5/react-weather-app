import React from 'react';
import '../styles/ConvertTemp.css';

class ConvertTemp extends React.Component {
  render() {
    const { farhenheitUnits, celciusUnits } = this.props;

    return (
      <div className="convert">
        <button onClick={farhenheitUnits} className="f active">F</button>
        <button onClick={celciusUnits} className="c">C</button>
      </div>
    );
  }
}

export default ConvertTemp;
