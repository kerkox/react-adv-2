import { Form, Formik } from "formik";
import { FormEvent, useState } from "react";
// import { useForm } from "../hooks/useForm";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  // const { formData, onChange, resetForm, isValidEmail, name, email, password1, password2 } = useForm({
  //   name: "",
  //   email: "",
  //   password1: "",
  //   password2: "",
  // });

  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const loadData  = () => {
    let edit = {
      name: "paul",
      email: "paul@paul.com",
      password1: "123456",
      password2: "123456"
    }
    setInitialValues(edit);
  }

  const resetData = () => {
    setInitialValues({
      email:'',
      name: '',
      password1: '',
      password2: ''
    });
  }
  
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);          
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2).max(15).required(),
          email: Yup.string().email().required(),
          password1: Yup.string().min(6),
          password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Las contraseñas deben ser iguales'),
        })}
        enableReinitialize
        
      >
        {
          ({ setFieldValue, handleReset }) => (
            <Form>
              <MyTextInput name="name" label="Name" />
              <MyTextInput name="email" label="Email" type="email" />
              <MyTextInput name="password1" label="Password" type="password" />
              <MyTextInput name="password2" label="Repeat Password" type="password" />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => {resetData(); handleReset()}}>Reset</button>
            </Form>
          )
        }
      </Formik>
     
     <button type="button" onClick={loadData}>Load Data</button>
     <button type="button" onClick={resetData}>Reset Data</button>
    </div>
  );
};
