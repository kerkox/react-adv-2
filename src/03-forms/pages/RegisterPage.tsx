import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail, name, email, password1, password2 } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          name="name"
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campos es necesario</span>}
        <input
          onChange={onChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
        />
        {!isValidEmail(email)  && <span>Email no es válido</span>}
        <input
          onChange={onChange}
          value={password1}
          name="password1"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={onChange}
          value={password2}
          name="password2"
          type="password"
          placeholder="Repeat Password"
        />

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
