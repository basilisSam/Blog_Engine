import React from "react";
import "../styles/cardStyle.css";

const Card = (props) => {
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={props.imgsrc} alt='img1' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente
          quae facilis debitis beatae repellat ab harum minus alias recusandae.
        </p>
      </div>
    </div>
  );
};

export default Card;
