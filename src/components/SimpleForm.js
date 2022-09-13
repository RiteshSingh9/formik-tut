import React from 'react'
import { useFormik } from 'formik';
import './css/SimpleForm.css';

function SimpleForm() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [channel, setChannel] = useState('');

    const formik = useFormik({
        initialValues: { // sets the initialValues
            name: 'Ritesh',
            email: '',
            channel: ''
        },
        onSubmit: (values) => {
            console.log('Form Data', values)
        }
    });

    // console.log('Form Values ');
    // console.table(formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'> Name </label>
                <input type="text" id='name' name='name' value={formik.values.name} onChange={formik.handleChange} />

                <label htmlFor='email'>E-mail</label>
                <input type="email" id='email' name='email' value={formik.values.email} onChange={formik.handleChange} />

                <label htmlFor='channel'>Channel </label>
                <input type="text" id='channel' name='channel' value={formik.values.channel} onChange={formik.handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;