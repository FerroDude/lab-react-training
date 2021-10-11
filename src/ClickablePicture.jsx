import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super();
    const { img } = props;
    this.state = {
      source: img,
    };
  }

  handleImageClick = () => {
    this.setState({
      source: this.props.imgClicked,
    });
  };
  render() {
    return (
      <div>
        <img
          onClick={this.handleImageClick}
          src={this.state.source}
          alt="Main Selfie"
        />
      </div>
    );
  }
}

export default ClickablePicture;

//My solution above
//Better solution below

/*  import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState((currentState) => {
      return { clicked: !currentState.clicked };
    });
  };

  render() {
    const { clicked } = this.state;
    const { img, imgClicked } = this.props;
    return (
      <img
        src={clicked ? imgClicked : img}
        alt="Stand-in alt"
        onClick={this.handleClick}
      />
    );
  }
}

export default ClickablePicture;
 */
