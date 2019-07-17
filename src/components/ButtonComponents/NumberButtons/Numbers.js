import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import Numbers from '../../../data';
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [NumbersList,setNumbersList] = useState(Numbers);
  return (
    <div className= "Numbers-area">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {Numbers.map(Number => (
        <NumberButton key={Number} Number={Number} />
      ))}
    </div>
  );
};
export default Numbers;