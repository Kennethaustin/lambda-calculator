import React, {useState} from "react";

const OperatorButton = ({op}) => {
  return ( 
    <button key = {op} > {op} </button>
      /* Display a button element rendering the data being passed down from the parent container on props */
   
  );
};
export default OperatorButton;