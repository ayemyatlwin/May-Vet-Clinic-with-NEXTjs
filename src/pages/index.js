import { useAppContext } from "@/components/AppContext";
import Overview from "@/components/Overview";
import Table from "@/components/Table";
import axios from "axios";
import { useState } from "react";

export default function Home({ renderedData }) {
  const {
    searchQuery,
    setSearchQuery,
  } = useAppContext();

  const [data, setData] = useState([...renderedData]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPets = data?.filter((pet) => {
    if (pet && pet.petname) {
      return pet.petname.toLowerCase().includes(searchQuery.toLowerCase());
    }
    setData(filteredPets);
    return false;
  });
  return (
    <>
      <Overview
        handleSearchInputChange={handleSearchInputChange}
        data={data}
        setData={setData}
        renderedData={renderedData}
      />
      <Table
        data={data}
        setData={setData}
        searchQuery={searchQuery}
        filteredPets={filteredPets}
        renderedData={renderedData}
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
