import { useParams } from "react-router-dom";
import { PageLayout } from "@/component/PageLayout";
import { useEffect, useState } from "react";

export const PersonInfoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { personName } = useParams();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [personName]);

  return (
    <PageLayout title="Person Info">
      {isLoading ? (
        <div className="notification is-info is-light">
          Loading data about <strong>{personName}</strong>...
        </div>
      ) : (
        <div className="content">
          <p>
            Information about <strong>{personName}</strong> has been loaded!
          </p>
        </div>
      )}
    </PageLayout>
  );
};
