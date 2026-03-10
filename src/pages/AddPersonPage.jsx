// @ts-nocheck
import { useOutletContext, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { PageLayout } from "@/component/PageLayout";
import { Notification } from "@/component/Notification";
import { AddPersonForm } from "@/component/AddPersonForm";


export const AddPersonPage = () => {
  const { addNewPerson } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    addNewPerson(values.name.trim());
    resetForm();
    navigate("/");
  };

  return (
    <PageLayout title="Add New Participant">
      <div className="box">
        <AddPersonForm onSubmit={handleSubmit} />

        <Notification type="is-info" className="mt-5 is-size-7">
          <strong>Note:</strong> Since this is a demo, new people are only saved
          in your browser's memory. Refreshing the page will reset the list to
          the default 15 names.
        </Notification>
      </div>
    </PageLayout>
  );
};
