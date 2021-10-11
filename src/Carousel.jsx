import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  handleNextImage = () => {
    const { length } = this.props.imgs;
    const { index } = this.state;
    if (index === length - 1) {
      return true;
    } else
      this.setState({
        index: this.state.index + 1,
      });
  };

  handlePreviousImage = () => {
    const { index } = this.state;
    if (index === 0) {
      return true;
    } else
      this.setState({
        index: this.state.index - 1,
      });
  };

  render = () => {
    const { index } = this.state;
    return (
      <div>
        <button onClick={this.handlePreviousImage}>Previous</button>
        <img src={this.props.imgs[index]} alt="Carousel images" />
        <button onClick={this.handleNextImage}>Next</button>
      </div>
    );
  };
}

export default Carousel;
