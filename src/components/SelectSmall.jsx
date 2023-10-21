import React, { useState } from "react";

export default function SelectSmall({
  val,
  valueOne,
  valueTwo,
  valueThree,
  renderedData,
  setData
}) {
  const [selectedDir, setSelectedDir] = useState("");

  const handleDirectorySelect = (selectedValue) => {
    setSelectedDir(selectedValue);
    const selectedData = renderedData?.filter((pet) => {
      return (
        pet &&
        (pet.breed.includes(selectedValue) ||
          pet.status.includes(selectedValue))
      );
    });

    setData(selectedData);
  };

  return (
    <>
      <select
        onChange={(e) => handleDirectorySelect(e.target.value)}
        id="small"
        className="block w-full p-1 mb-3 text-sm text-placeholder selectBorders rounded-full bg-inherit"
      >
        <option selected disabled value={val}>
          {val}
        </option>
        <option value={valueOne}>{valueOne}</option>
        <option value={valueTwo}>{valueTwo}</option>
        {valueThree && <option value={valueThree}>{valueThree}</option>}
      </select>
    </>
  );
}
