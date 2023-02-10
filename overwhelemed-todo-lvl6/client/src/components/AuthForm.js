import React from "react";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

import { AuthContext } from "../context/AuthContext";

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: { username, password, email, firstName },
    errMsg,
    toggleForm
  } = props;
  const { isFetching } = useContext(AuthContext);
  return (
   
    
    <form className="authForm" onSubmit={handleSubmit}>
    <h2>{btnText}</h2>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
        required
      />
       <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              name="password"
              onChange={handleChange}
              value={password}
            />
     
      {btnText === "Sign up" && (
        <>
        {/* <input
              placeholder="Retype Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              onChange={handleChange}
              value={password}
            /> */}
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
          />
        </>
      )}
      {btnText === "Sign up" ? <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button> : <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>}
      <p style={{ color: "red" }}>{errMsg}</p>
      <p className="toggle-form" onClick={toggleForm}>{btnText === "Sign up" ? "Already a member?" : "Not a member?"}</p>
      <span className="loginForgot">Forgot Password?</span>
    </form>
    
  );
}
// add functionality for "Forgot Password"