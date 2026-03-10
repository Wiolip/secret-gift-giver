// @ts-nocheck
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import "bulma/css/bulma.css";

import { Header } from "@/component/Header";
import { PeoplePage } from "@/pages/PeoplePage";
import { Navbar } from "@/component/Navbar";
import { people as initialPeople } from "@/people";
import { AddPersonPage } from "./pages/AddPersonPage";


function App() {
  const [allPeople, setAllPeople] = useState(initialPeople);
  const [selectedNames, setSelectedNames] = useState([]);

  const handleSelect = (name) => {
    const isSelected = selectedNames.includes(name);
    setSelectedNames(
      isSelected
        ? selectedNames.filter((n) => n !== name)
        : [...selectedNames, name],
    );
  };

  const clearSelections = () => {
    setSelectedNames([]);
  };

  const addNewPerson = (name) => {
    if (!allPeople.includes(name)) {
      setAllPeople([...allPeople, name]);
    }
  };

  return (
    <>
      <Header
        title="Secret Gift Giver "
        subtitle="Exchange gifts with your colleagues "
      />
      <Navbar />

      <main className="container mt-4 p-4">
        <Outlet
          context={{
            people: allPeople,
            selectedNames,
            handleSelect,
            clearSelections,
            addNewPerson,
          }}
        />
      </main>
    </>
  );
}

export default App;
