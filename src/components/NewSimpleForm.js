import React from "react";
// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./css/SimpleForm.css";
import * as Yup from "yup";

function NewSimpleForm() {
    const initialValues = {
        name: "Ritesh",
        email: "",
        channel: "",
    };

    const onSubmit = (values) => {
        console.log("Form Data ", values);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is Required !"),
        email: Yup.string()
            .email("Invalid email Format")
            .required("E-mail is Required !"),
        channel: Yup.string().required("Channel name is Required !"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <label htmlFor="name"> Name </label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                />
                <ErrorMessage name="name" />

                <label htmlFor="email">E-mail</label>
                <Field
                    type="text"
                    id="email"
                    name="email"
                />
                <ErrorMessage name="email" />

                <label htmlFor="channel">Channel </label>
                <Field
                    type="text"
                    id="channel"
                    name="channel"
                />
                <ErrorMessage name="channel" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default NewSimpleForm;
