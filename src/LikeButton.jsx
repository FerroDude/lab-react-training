import React from 'react';
class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Likes {this.state.count}</button>
      </div>
    );
  }
}

export default LikeButton;
