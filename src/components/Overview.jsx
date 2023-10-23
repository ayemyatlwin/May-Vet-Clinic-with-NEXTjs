import React from "react";
import search from "../images/search.png";
import SelectSmall from "./SelectSmall";
import CreatePatient from "./CreatePatient";
import { useAppContext } from "./AppContext";

const Overview = ({ handleSearchInputChange, setData, renderedData }) => {
  const { selectedRow, setSelectedRow,searchQuery } =
    useAppContext();

  const rowChangeHandler = (value) => {
    setSelectedRow(Number(value));
  };

  return (
    <div className=" flex flex-col px-5">
      <h1 className=" Title font-semibold">Patient List</h1>
      <div className=" flex justify-between ">
        <div className="flex flex-col">
          <div className="inputSearch flex py-1">
            <input
              className=" outline-none"
              type="text"
              name=""
              placeholder="Search by Pet Name"
              value={searchQuery}
              onChange={handleSearchInputChange}
              id=""
            />
            <img src={search} className="h-3 w-3 mt-1.5  ms-auto" alt="" />
          </div>
          <div className="flex gap-3 mt-2">
            <SelectSmall
              val={"Status"}
              renderedData={renderedData}
              valueOne={"allergy"}
              valueTwo={"picky_eat"}
              setData={setData}
            />
            <SelectSmall
              val={"Breed All"}
              renderedData={renderedData}
              valueOne={"Golden Retriever"}
              valueTwo={"Beagle"}
              valueThree={"Spaniel"}
              setData={setData}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <CreatePatient />
          <div className="flex mt-2 ">
            <label htmlFor="small" className="block text-xs font-medium  ">
              Rows per page:
            </label>
            <select
              value={selectedRow}
              onChange={(e) => {
                rowChangeHandler(e.target.value);
              }}
              id="small"
              className="block w-full p-1 mb-3 text-sm text-placeholder selectBorders rounded-full bg-inherit"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
