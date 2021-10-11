import React from 'react';

class Random extends React.Component {
  randomNumber = () => {
    const { min, max } = this.props;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  render = () => {
    return (
      <div>
        <h1>{this.randomNumber}</h1>
      </div>
    );
  };
}

export default Random;
