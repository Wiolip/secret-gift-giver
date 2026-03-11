// @ts-nocheck
import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageLayout } from "@/component/PageLayout";

export const PersonInfoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { personId } = useParams();

  const context = useOutletContext();
  const people = context?.people || [];

  const person = people.find((p) => String(p.id) === personId);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [personId]);

  return (
    <PageLayout title="Person Info">
      {isLoading ? (
        <div className="notification is-info is-light">Loading data...</div>
      ) :
      person ? (
        <div className="box">
          <h3 className="title is-4">{person.name}</h3>
          <p>
            <strong>Email:</strong> {person.email}
          </p>
          <p>
            <strong>Newsletter:</strong>{" "}
            {person.newsletter ? "✅ Subscribed" : "❌ No"}
          </p>
        </div>
      ) : (

        <div className="notification is-danger">
          Oops! Person with ID {personId} not found.
        </div>
      )}
    </PageLayout>
  );
};
