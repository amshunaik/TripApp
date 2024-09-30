"use client";
import React, { useState,useContext, useEffect } from 'react';
import { useRouter } from "next/router";
const AddedTrav:React.FC<{Trav:number,butClick:boolean}> = (props) => {
  const number = {
    2: "Second", 3: "Third", 4: "Fourth", 5: "Fifth", 6: "Sixth",
    7: "Seventh", 8: "Eighth", 9: "Ninth", 10: "Tenth",
    11: "Eleventh", 12: "Twelfth", 13: "Thirteenth", 14: "Fourteenth",
    15: "Fifteenth", 16: "Sixteenth", 17: "Seventeenth", 18: "Eighteenth",
    19: "Nineteenth", 20: "Twentieth"
  };

  // State to hold traveler details

  const [travelers, setTravelers] = useState(
    Array(props.Trav - 1).fill({ name: '', age: '' })
  );

  // Handle change function to update traveler details
  const handleChange = (index:number, field:string, value:string) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setTravelers(updatedTravelers);
  };

  useEffect(()=>{
    console.log(props.butClick);
    if(props.butClick==true&&travelers.length<props.Trav-1){
        alert("Next time make sure to fill other travellers details too");
        return;

    }

  },[props.butClick])

  // Prepare JSX elements for each traveler
  let text = [];
  for (let i = 2; i <= props.Trav; i++) {
    text.push(
      <div key={i}>
        <h2 className="text-lg font-semibold">{number[i]} Traveller</h2>
        <div className="flex flex-row gap-4 mb-4">
          <div className="flex flex-col gap-2 mt-4">
            <label>Name</label>
            <input
              type="text"
              className="border-b-[1px] border-black w-[200px]"
              value={travelers[i - 2]?.name}
              onChange={(e) => handleChange(i - 2, 'name', e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label>Age</label>
            <input
              type="number"
              className="border-b-[1px] border-black w-[200px]"
              value={travelers[i - 2]?.age}
              onChange={(e) => handleChange(i - 2, 'age', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {text}
     
    </div>
  );
};

export default AddedTrav;
