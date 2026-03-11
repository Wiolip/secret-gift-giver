// @ts-nocheck
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "bulma/css/bulma.css";

import { Header } from "@/component/Header";
import { Navbar } from "@/component/Navbar";
import { peopleService } from "./services/peopleService";

function App() {
  const [allPeople, setAllPeople] = useState([]);
  const [selectedPeopleIds, setSelectedPeopleIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setIsLoading(true);
        const response = await peopleService.getPeople();
        setAllPeople(response.data);
      } catch (error) {
        console.error(
          "Unable to load the list of participants. Please try again later.",
          error,
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const handleSelect = (id) => {
    const isSelected = selectedPeopleIds.includes(id);

    setSelectedPeopleIds(
      isSelected
        ? selectedPeopleIds.filter((personId) => personId !== id)
        : [...selectedPeopleIds, id],
    );
  };

  const clearSelections = () => {
    setSelectedPeopleIds([]);
  };

  const selectAllPeople = () => {
    const allIds = allPeople.map((person) => person.id);
    setSelectedPeopleIds(allIds);
  };

  const addNewPerson = async (personData) => {
    try {
      const response = await peopleService.addPerson(personData);

      setAllPeople((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Failed to add person to the server:", error);
    }
  };

  const deletePerson = async (id) => {
    try {
      await peopleService.deletePerson(id);

      setAllPeople((prev) => prev.filter((person) => person.id !== id));
    } catch (error) {
      console.error(`Failed to delete person with ID ${id}:`, error);
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
        {isLoading ? (
          <div className="has-text-centered">
            <button className="button is-loading is-large is-ghost">
              Loading
            </button>
          </div>
        ) : (
          <Outlet
            context={{
              people: allPeople,
              selectedPeopleIds,
              selectAllPeople,
              handleSelect,
              clearSelections,
              addNewPerson,
              deletePerson,
            }}
          />
        )}
      </main>
    </>
  );
}

export default App;
