import Overview from "@/components/Overview";
import Table from "@/components/Table";
import axios from "axios";
import { useState } from "react";

export default function Home({ renderedData }) {
  const [selectedRow,setSelectedRow]=useState(20);
  console.log(selectedRow);

  const [data, setData] = useState([...renderedData.slice(0,selectedRow)]);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const filteredPets = data?.filter((pet) => {
    if (pet && pet.petname) {
      return pet.petname.toLowerCase().includes(searchQuery.toLowerCase());
    }
    setData(filteredPets);
    return false;
  });
  // console.log(filteredPets);

  

  return (
    <>
      <Overview
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        setData={setData}
        renderedData={renderedData}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
      <Table
        data={data}
        searchQuery={searchQuery}
        editModal={editModal}
        setEditModal={setEditModal}
        filteredPets={filteredPets}
        selectedRow={selectedRow}
      />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://patient-list-w0nz.onrender.com/patients"
  );
  const renderedData = response.data;

  return {
    props: {
      renderedData,
    },
  };
}
