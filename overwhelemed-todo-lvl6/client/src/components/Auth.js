import React, { useState, useContext, useRef } from "react";
import AuthForm from "./AuthForm.js";
import { UserContext } from "../context/UserProvider.js";




export default function Auth() {
  const initInputs = { username: "", password: "",  firstName: "", lastName: "", email: "" };
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);
const passwordRef = useRef()
  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);
 
  function handleChange(e) {
    const { name, value } = e.target;
    
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    if (passwordRef.current.value !== inputs.password) {
      passwordRef.current.setCustomValidity("Passwords don't match!");
    } else {
    signup(inputs);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthErr();
  }

  return (
    <div className="auth-container">
      {!toggle ? (
        <AuthForm
          handleChange={handleChange}
          handleSubmit={handleSignup}
          inputs={inputs}
          btnText="Sign up"
          errMsg={errMsg}
          toggleForm={toggleForm}
          passwordRef={passwordRef}
        />
      ) : (
        <AuthForm
          handleChange={handleChange}
          handleSubmit={handleLogin}
          inputs={inputs}
          btnText="Login"
          errMsg={errMsg}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
}
