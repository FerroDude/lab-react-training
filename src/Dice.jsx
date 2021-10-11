import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      dice: 3,
    };
  }

  handleClick = () => {
    this.setState({
      dice: '-empty',
    });
    setTimeout(() => this.setState({ dice: 6 }), 5000);
  };

  render = () => {
    const { dice } = this.state;
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={`/img/dice${dice}.png`}
          alt="Dice"
        />
      </div>
    );
  };
}

export default Dice;
