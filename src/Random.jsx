import React from 'react';

class Random extends React.Component {
  constructor(props) {
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
    const { random } = this.state;
    return (
      <div>
        <p>
          Click <button onClick={this.randomNumber}>HERE</button> to get a
          random number between {min} and {max} ={'>'}
          {random}
        </p>
      </div>
    );
  };
}

export default Random;
