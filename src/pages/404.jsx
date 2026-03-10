import { PageLayout } from "@/component/PageLayout";
import { Notification } from "@/component/Notification";
import { useLocation } from "react-router-dom";

export const PageNotFound = () => {
  const { pathname } = useLocation();

  return (
    <PageLayout title="Page not found">
      <Notification type="is-danger">
        Path <strong>{pathname}</strong> was not found.
      </Notification>
    </PageLayout>
  );
};
