import { useState } from "react";
import { useOutletContext } from "react-router";
import { PageLayout } from "@/component/PageLayout";
import { Notification } from "@/component/Notification";

export const ExchangePage = () => {
  const { people, selectedPeopleIds } = useOutletContext();
  const [pairs, setPairs] = useState([]);

  const participants = people.filter((person) =>
    selectedPeopleIds.includes(person.id),
  );

  const handleShuffle = () => {

    if (participants.length < 3) return;


    let result = [];
    let attempts = 0;
    let success = false;


    while (!success && attempts < 100) {
      attempts++;

      let pool = [...participants];
      result = [];

      // Fisher-Yates shuffle algorithm to randomize the recipient pool
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      // Check for "self-draws": ensure no one is assigned to themselves
      // We compare the original selectedPeopleIds list with the shuffled pool
      success = participants.every((p, index) => p.id !== pool[index].id);

      if (success) {
        // Build the final array with a hidden state for the UI
        result = participants.map((p, index) => ({
          giver: p,
          receiver: pool[index],
          isRevealed: false,
        }));
      }
    }

    // Update state with the new randomized pairs
    setPairs(result);
  };

  // Toggle the visibility of a specific result in the table
  const toggleReveal = (index) => {
    setPairs((prev) =>
      prev.map((pair, i) =>
        i === index ? { ...pair, isRevealed: !pair.isRevealed } : pair,
      ),
    );
  };

  return (
    <PageLayout title="Exchange of gifts">
      <div className="box">
        {/* Render warning if the user hasn't selected enough people yet */}
        {participants.length < 3 ? (
          <Notification type="is-warning">
            <p>
              ⚠️ <strong>Not enough people!</strong>
            </p>
            <p>
              Go back to the <strong>People</strong> tab and select at least 3
              participants.
            </p>
          </Notification>
        ) : (
          <div className="has-text-centered">
            <button
              className="button is-info is-large is-fullwidth mb-5"
              onClick={handleShuffle}>
              🎲 Draw Pairs!
            </button>
          </div>
        )}

        {/* Render the results table once pairs have been generated */}
        {pairs.length > 0 && (
          <div className="table-container mt-4 animate__animated animate__fadeIn">
            <table className="table is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>Giver</th>
                  <th className="has-text-centered">Secret Match</th>
                </tr>
              </thead>
              <tbody>
                {pairs.map((pair, index) => (
                  <tr key={pair.giver.id}>
                    <td className="is-vcentered">
                      <strong>{pair.giver.name}</strong>
                      <div className="is-size-7 has-text-grey">
                        {pair.giver.email}
                      </div>
                    </td>
                    <td className="has-text-centered">
                      <button
                        className={`button is-small ${pair.isRevealed ? "is-success is-light" : "is-dark"}`}
                        onClick={() => toggleReveal(index)}>
                        {pair.isRevealed ? (
                          <span>🎁 {pair.receiver.name}</span>
                        ) : (
                          <span>🔒 Click to reveal</span>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
