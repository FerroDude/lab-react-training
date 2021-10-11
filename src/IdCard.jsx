import React from 'react';

const IdCard = (props) => {
  return (
    <div className="container">
      <figure>
        <img src={props.picture} alt="Face pic" />
      </figure>

      <aside>
        <h4>First Name: {props.firstName}</h4>
        <h4>Last Name: {props.lastName}</h4>
        <h4>Gender: {props.gender}</h4>
        <h4>Height: {props.height}</h4>
        <h4>Birth: {props.birth.toDateString()}</h4>
      </aside>
    </div>
  );
};

export default IdCard;
