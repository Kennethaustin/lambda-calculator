import React,{useState} from "react";
import { Specials } from "../../../data";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
const [Special,SpecialList] = useState(Specials)
  return (
    <div className="Specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {special.map((special) => {
        return <button className="specialButton" key={special}> {special} </button>;
      })}
    </div>
  );
};
export default Specials;