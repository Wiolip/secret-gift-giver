// @ts-nocheck
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { PageLayout } from "@/component/PageLayout";
import { Notification } from "@/component/Notification";
import { AddPersonForm } from "@/component/AddPersonForm";

export const AddPersonPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  
  const { addNewPerson } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setErrorMessage(null);
      await addNewPerson(values);
      resetForm();
      navigate("/");

    } catch (error) {
      const message = error.response?.data?.message || "Is the server running?";
      setErrorMessage(`Could not save to database. ${message}`);

  }

  };

  return (
    <PageLayout title="Add New Participant">
      <div className="box">
        {errorMessage && (
          <div className="notification is-danger is-light">
            <button
              className="delete"
              onClick={() => setErrorMessage(null)}></button>
            {errorMessage}
          </div>
        )}
        <AddPersonForm onSubmit={handleSubmit} />

        <Notification type="is-info" className="mt-5 is-size-7">
          <strong>Note:</strong> New participants are now permanently saved to
          the JSON database. Even after a refresh, they will stay on the list!
        </Notification>
      </div>
    </PageLayout>
  );
};
