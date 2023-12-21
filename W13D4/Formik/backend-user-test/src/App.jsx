import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import './App.css'

const FormikInitialValues = {
  username:'',
  password:'',
  role:''
}

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('This is required'),
  password: Yup.string()
    .min(4, "Password should contain at least 8 characters!")
    .required("You need a password"),
  role: Yup.string()
})

function App() {

  async function handleValues(values) {
    console.log(values);

    const response = await axios.post('http://localhost:6000/register',values)

  }


  return (
    <>
      <Formik
        initialValues={FormikInitialValues}
        validationSchema={SignUpSchema}
        onSubmit={values => handleValues(values)}
      >
        <Form>

          <label htmlFor="username">Username</label>
          <Field id='' name='username' placeholder='Enter username' />
          <ErrorMessage name="username" />
          <label htmlFor="password">Password</label>
          <Field id='' name='password' placeholder='Enter password' />
          <ErrorMessage name="password" />
          <label htmlFor="role">Role</label>
          <Field id='' name='role' placeholder='Enter role' />

          <button type="submit">Submit</button>
          
        </Form>
      </Formik>
    </>
  )
}

export default App
