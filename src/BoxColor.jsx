import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: 'white',
    border: '1px solid black',
  };
  return (
    <div>
      <p style={divStyle}>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
};

export default BoxColor;
