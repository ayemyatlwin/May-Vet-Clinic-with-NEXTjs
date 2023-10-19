import * as React from "react";

export default function SelectSmall({ val, valueOne, valueTwo, valueThree,setSelectedDir }) {
    
  return (
    <>
      <select onChange={(e)=>setSelectedDir(e.target.value)}
        id="small"
        className="block w-full p-1 mb-3 text-sm text-placeholder  selectBorders rounded-full bg-inherit "
      >
        <option selected disabled value={val}>{val}</option>
        <option value={valueOne}>{valueOne}</option>
        <option value={valueTwo}>{valueTwo}</option>
        {valueThree && <option value={valueThree}>{valueThree}</option>}
      </select>
    </>
  );
}
