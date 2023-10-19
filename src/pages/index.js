import Overview from "@/components/Overview";
import Table from "@/components/Table";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home({ data }) {
  const router = useRouter();
  const handleRefresh = () => {
    router.reload();
  };

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
    return false;
  });
  const [selectedDir, setSelectedDir] = useState("");
  // console.log(selectedDir);

  const selectedData = data?.filter((pet) => {
    switch (true) {
      case pet && pet.breed.includes(selectedDir):
      case pet && pet.status.includes(selectedDir):
        return true;
      default:
        return false;
    }
  });

  return (
    <>
      <Overview
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedDir={setSelectedDir}
      />
      <Table
        selectedData={selectedData}
        data={data}
        searchQuery={searchQuery}
        editModal={editModal}
        setEditModal={setEditModal}
        filteredPets={filteredPets}
      />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://patient-list-w0nz.onrender.com/patients"
  );
  const data = response.data;
  return {
    props: {
      data,
    },
  };
}
