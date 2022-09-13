import React from "react";
import { useFormik } from "formik";
import "./css/SimpleForm.css";
import * as Yup from 'yup';


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
        name: Yup.string().required('Name is Required !'),
        email: Yup.string().email('Invalid email Format').required('E-mail is Required !'),
        channel: Yup.string().required('Channel name is Required !')
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>New Simple Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name"> Name </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="errors">
                        <strong>Error : </strong>
                        {formik.errors.name}
                    </div>
                ) : null}

                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="errors">
                        <strong>Error : </strong> {formik.errors.email}
                    </div>
                ) : null}

                <label htmlFor="channel">Channel </label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    {...formik.getFieldProps('channel')}
                />
                {formik.touched.channel && formik.errors.channel ? (
                    <div className="errors">
                        <strong>Error : </strong>
                        {formik.errors.channel}
                    </div>
                ) : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewSimpleForm;
