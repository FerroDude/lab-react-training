import React from 'react';

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      random: 0,
    };
  }
  randomNumber = () => {
    const { min, max } = this.props;
    this.setState({
      random: Math.floor(Math.random() * (max - min + 1) + min),
    });
  };
  render = () => {
    const { min, max } = this.props;
    return (
      <div>
        <p>
          Click{' '}
          <strong strong onClick={this.randomNumber}>
            HERE
          </strong>{' '}
          to get a random number between {min} and {max} =>
          {this.state.random}
        </p>
      </div>
    );
  };
}

export default Random;
