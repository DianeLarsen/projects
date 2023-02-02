import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    inputs: {
      username, 
      password,
      firstName,
      lastName 
    },
    errMsg, 
    
  } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
         <input 
        type="text" 
        value={firstName} 
        name="firstName" 
        onChange={handleChange} 
        placeholder="First Name"/>
         <input 
        type="text" 
        value={lastName} 
        name="lastName" 
        onChange={handleChange} 
        placeholder="Last Name"/>
      <button>{ btnText }</button>
      <p style={{color: "red"}}>{errMsg}</p>
    </form>
  )
}