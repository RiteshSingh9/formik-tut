import React from 'react'
import { useFormik } from 'formik';
import './css/SimpleForm.css';

function SimpleForm() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [channel, setChannel] = useState('');
    const initialValues = {
        name: 'Ritesh',
        email: '',
        channel: ''
    }

    const onSubmit = (values) => {
        console.log('Form Data ', values)
    }

    const validate = (values) => {
        /**
             * Requirements to work properly
             *  - this function must return and object names errors
             *  - the keys of object must be same as fields name i.e. errors.channel errors.email errors.channel
             *  - The values of these keys should be a string locating the message
             * e.g. errors.name = 'This fields is required'
             */

        console.log('Validating form data ', values);
        const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        let errors = {};

        if (!values.name) {
            errors.name = 'Name is Required !';
        }


        if (!values.email) {
            errors.email = 'Email is Required';
        } else if (!email_pattern.test(values.email)) {
            errors.email = 'Invalid email format !';
        }

        if (!values.channel) {
            errors.channel = 'Channel name is Required !';
        }

        console.log('Validated form data ', errors);

        return errors;

    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        // initialValues: initialValues,
        // onSubmit: onSubmit,
        // validate: validate
        // validateOnBlur: validate
    });

    // console.log('Form Values ');
    // console.table(formik.values)
    console.log('From Errors', formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'> Name </label>
                <input type="text" id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name ? <div className="errors"><strong>Error : </strong>{formik.errors.name}</div> : null}

                <label htmlFor='email'>E-mail</label>
                <input type="text" id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email ? <div className="errors"><strong>Error : </strong> {formik.errors.email}</div> : null}


                <label htmlFor='channel'>Channel </label>
                <input type="text" id='channel' name='channel' value={formik.values.channel} onChange={formik.handleChange} />
                {formik.errors.channel ? <div className="errors"><strong>Error : </strong>{formik.errors.channel}</div> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;