import React from "react";
// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./css/SimpleForm.css";
import * as Yup from "yup";
import TextError from "./TextError";

function NewSimpleForm() {
    const initialValues = {
        name: "Ritesh",
        email: "",
        channel: "",
        comments: "",
        address: "",
        social: {
            facebook: '',
            twitter: '',
        },
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
                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                    />
                    <ErrorMessage name="name" component={TextError} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <Field
                        type="text"
                        id="email"
                        name="email"
                    />
                    <ErrorMessage name="email">
                        {
                            (erroMsg) => {
                                return <div className="errors">{erroMsg}</div>
                            }
                        }
                    </ErrorMessage>
                </div>

                <div className="form-group">
                    <label htmlFor="channel">Channel </label>
                    <Field
                        type="text"
                        id="channel"
                        name="channel"
                    />
                    <ErrorMessage name="channel" component={TextError} />
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <Field as='textarea' id="comments" name="comments" rows="5" />
                    {/* alternative yuu can use component instead of as but their internal implementation is a bit different */}
                    {/* <Field component='textarea' id="comments" name="comments" rows="5" /> */}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    {/* Render props pattern */}
                    {/* custom form components hooked into formik */}
                    <Field name="address">
                        {
                            (props) => {
                                const { field, form, meta } = props;
                                console.log('Render props ', props)
                                return (<div>
                                    <input type="text" name="address" {...field} />
                                    {/* error handling */}
                                    {meta.touched && meta.error ? <div className="errors">{meta.error}</div> : null}
                                </div>)
                            }
                        }
                    </Field>
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook Profile</label>
                    <Field type="text" id="facebook" name="social.facebook" />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter Profile</label>
                    <Field type="text" id="twitter" name="social.twitter" />
                </div>

                <button type="submit">Submit</button>
            </Form >
        </Formik >
    );
}

export default NewSimpleForm;
