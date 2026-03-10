// @ts-nocheck
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const AddPersonForm = ({ onSubmit }) => {
  const initialValues = { name: "", email: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ isValid, dirty }) => (
        <Form>
          <div className="field">
            <label className="label">Person Name</label>
            <div className="control has-icons-left">
              <Field
                name="name"
                type="text"
                placeholder="Enter name (e.g. Santa Claus)"
                className="input is-info is-medium"
              />
              <span className="icon is-small is-left">👤</span>
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="help is-danger"
            />
          </div>

          <div className="field mt-4">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <Field
                name="email"
                type="email"
                placeholder="Enter email (e.g. santa@example.com)"
                className="input is-info is-medium"
              />
              <span className="icon is-small is-left">📧</span>
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="help is-danger"
            />
          </div>

          <div className="field mt-5">
            <div className="control">
              <button
                type="submit"
                className="button is-primary is-fullwidth is-medium"
                disabled={!(isValid && dirty)}>
                Add to List
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
