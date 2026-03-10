// @ts-nocheck
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageLayout } from "@/component/PageLayout";
import { PeopleList } from "@/component/PeopleList";
import { Searchbar } from "@/component/Searchbar";
import { Notification } from "@/component/Notification";


export const PeoplePage = ({ noOutlet = false }) => {

  const [searchText, setSearchText] = useState('');
  const { people, selectedNames, handleSelect, clearSelections } =
    useOutletContext();

  const filteredPeople = people.filter((name) =>
    name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <PageLayout title="List of People">
      <div className="columns is-desktop">
        <div className="column">
          <div className="block">
            
            {selectedNames.length < 2 ? (
              <Notification type="is-warning" className="has-text-centered">
                <p className="has-text-centered">
                  👋 <strong>Select at least 2 people</strong> from the list
                  below to unlock the gift draw!
                </p>
              </Notification>
            ) : (
              <div className="buttons">
                <Link
                  to="/exchange"
                  className="button is-success is-medium is-flex-grow-1">
                  🎁 Ready to draw! ({selectedNames.length})
                </Link>

                <button
                  className="button is-danger is-light is-medium"
                  onClick={clearSelections}
                  title="Unselect all">
                  Clear
                </button>
              </div>
            )}
          </div>

          <Searchbar onSearch={(value) => setSearchText(value)} />

          <article className="panel is-info">
            {filteredPeople.map((name) => (
              <PeopleList
                key={name}
                name={name}
                isSelected={selectedNames.includes(name)}
                onSelect={() => handleSelect(name)}
              />
            ))}
          </article>
        </div>
        {!noOutlet && (
          <div className="column">
            <Outlet />
          </div>
        )}
      </div>
    </PageLayout>
  );
}
