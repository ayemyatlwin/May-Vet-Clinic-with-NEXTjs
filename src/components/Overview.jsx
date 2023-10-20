import React from "react";
import search from "../images/search.png";
import SelectSmall from "./SelectSmall";
import CreatePatient from "./CreatePatient";

const Overview = ({
  searchQuery,
  handleSearchInputChange,
  showModal,
  setShowModal,
  data,
  setData,
  renderedData,
}) => {
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
              data={data}
            />
            <SelectSmall
              val={"Breed All"}
              renderedData={renderedData}
              valueOne={"Golden Retriever"}
              valueTwo={"Beagle"}
              valueThree={"Spaniel"}
              setData={setData}
              data={data}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <CreatePatient showModal={showModal} setShowModal={setShowModal} />
          <div className="flex mt-2 ">
            <label htmlFor="small" className="block text-xs font-medium  ">
              Rows per page:
            </label>
            <select
              id="small"
              className="block w-full p-1 mb-3 text-sm text-placeholder selectBorders rounded-full bg-inherit"
            >
              <option selected value="10">
                10
              </option>
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
