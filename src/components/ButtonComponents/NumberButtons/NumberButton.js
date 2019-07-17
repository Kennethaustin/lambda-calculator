import React,{useState} from "react";

const NumberButton = (props) => {
  const { Content } = props;
  return (
  <button className="numButton">{Content}
  </button>
  
  /* Display a button element rendering the data being passed down from the parent container on props */
  );
};
export default NumberButton;