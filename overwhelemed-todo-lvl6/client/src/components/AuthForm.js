import React from "react";

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: { username, password, firstName, lastName },
    errMsg,
    toggleForm
  } = props;

  return (
   
    
    <form className="authForm" onSubmit={handleSubmit}>
    <h2>{btnText}</h2>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      {btnText === "Sign up" && (
        <>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
          />
        </>
      )}
      <button>{btnText}</button>
      <p style={{ color: "red" }}>{errMsg}</p>
      <p className="toggle-form" onClick={toggleForm}>{btnText === "Sign up" ? "Already a member?" : "Not a member?"}</p>
    </form>
    
  );
}
