// @ts-nocheck
import { useState } from "react";
import { Outlet, useOutletContext, Link, useParams } from "react-router-dom";
import classNames from "classnames";

import { PageLayout } from "@/component/PageLayout";
import { PeopleList } from "@/component/PeopleList";
import { Searchbar } from "@/component/Searchbar";
import { Notification } from "@/component/Notification";


export const PeoplePage = () => {
  const [searchText, setSearchText] = useState("");
  const { personId } = useParams();


  const {
    people,
    selectedPeopleIds,
    selectAllPeople,
    handleSelect,
    clearSelections,
    deletePerson,
  } = useOutletContext();


  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleDelete = async (person) => {
    const confirmed = window.confirm(
      `Do you really want to remove ${person.name} from the database?`,
    );

    if (confirmed) {
      await deletePerson(person.id);
    }
  };


  return (
    <PageLayout title="List of People">
      <div className="columns is-desktop">
        <div className={classNames("column", personId ? "is-4" : "is-12")}>
          <div className="block">
            {selectedPeopleIds.length < 3 ? (
              <Notification type="is-warning" className="has-text-centered">
                <p>
                  👋 <strong>Select at least 3 people</strong> from the list
                  below to unlock the gift draw! You can also{" "}
                  <strong>select all participants</strong> by clicking the
                  button below.
                </p>
                <button
                  className="button is-small is-info is-light mt-2"
                  onClick={selectAllPeople}>
                  Select All
                </button>
              </Notification>
            ) : (
              <div className="buttons">
                <Link
                  to="/exchange"
                  className="button is-success is-medium is-flex-grow-1">
                  🎁 Ready to draw! ({selectedPeopleIds.length})
                </Link>
                <button
                  className="button is-danger is-light is-medium"
                  onClick={clearSelections}>
                  Clear
                </button>
              </div>
            )}
          </div>

          <Searchbar onSearch={(value) => setSearchText(value)} />

          <article className="panel is-info">
            {filteredPeople.map((person) => (
              <PeopleList
                key={person.id}
                id={person.id}
                name={person.name}
                isSelected={selectedPeopleIds.includes(person.id)}
                onSelect={() => handleSelect(person.id)}
                onDelete={() => handleDelete(person)}
              />
            ))}
          </article>
        </div>

        {personId && (
          <div className="column is-8">
            <Outlet context={{ people }} />
          </div>
        )}
      </div>
    </PageLayout>
  );
};
