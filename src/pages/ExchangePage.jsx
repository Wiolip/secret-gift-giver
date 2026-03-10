import { useState } from "react";
import { useOutletContext } from "react-router";
import { PageLayout } from "@/component/PageLayout";
import { Notification } from "@/component/Notification";

export const ExchangePage = () => {
  // Get selected participants from App via Outlet context
  const { selectedNames } = useOutletContext();

  // State to store the generated pairs { giver, receiver, isRevealed }
  const [pairs, setPairs] = useState([]);

  const handleShuffle = () => {
    // Safety check: need at least 2 people to swap gifts
    if (selectedNames.length < 2) return;

    // 1. Create a copy of the list to shuffle
    let pool = [...selectedNames];
    let result = [];
    let attempts = 0;
    let success = false;

    // Attempt to generate a valid shuffle (max 100 attempts to avoid infinite loops)
    while (!success && attempts < 100) {
      attempts++;
      result = [];

      // Fisher-Yates shuffle algorithm to randomize the recipient pool
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      // Check for "self-draws": ensure no one is assigned to themselves
      // We compare the original selectedNames list with the shuffled pool
      success = selectedNames.every((name, index) => name !== pool[index]);

      if (success) {
        // Build the final array with a hidden state for the UI
        result = selectedNames.map((name, index) => ({
          giver: name,
          receiver: pool[index],
          isRevealed: false,
        }));
      }
    }

    // Update state with the new randomized pairs
    setPairs([...result]);
  };

  // Toggle the visibility of a specific result in the table
  const toggleReveal = (index) => {
    const newPairs = [...pairs];
    newPairs[index].isRevealed = !newPairs[index].isRevealed;
    setPairs(newPairs);
  };

  return (
    <PageLayout title="Exchange of gifts">
      <div className="box">
        {/* Render warning if the user hasn't selected enough people yet */}
        {selectedNames.length < 2 ? (
          <Notification type="is-warning">
            <p>
              ⚠️ <strong>Not enough people!</strong>
            </p>
            <p>
              Go back to the <strong>People</strong> tab and select at least 2
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
          <div className="table-container mt-4">
            <table className="table is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>Giver</th>
                  <th className="has-text-centered">Secret Match</th>
                </tr>
              </thead>
              <tbody>
                {pairs.map((pair, index) => (
                  <tr key={index}>
                    <td className="is-vcentered">
                      <strong>{pair.giver}</strong>
                    </td>
                    <td className="has-text-centered">
                      <button
                        className={`button is-small ${pair.isRevealed ? "is-success is-light" : "is-dark"}`}
                        onClick={() => toggleReveal(index)}>
                        {pair.isRevealed ? (
                          <span>
                            🎁 Giving to: <strong>{pair.receiver}</strong>
                          </span>
                        ) : (
                          "Click to reveal"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="help has-text-centered mt-3">
              Don't peek at others' results! Click the button to see your match.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
