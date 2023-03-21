import { useState } from "react"


function Register() {
  const [isRegistered, setIsRegistered] = useState(false)
  const handleRegister = ()=>{
    setIsRegistered(!isRegistered)
    console.log("user is registered");
  }
  return (
    <div className='registerContainer'>
      <h2>Create Account</h2>
      <input className='userInput' placeholder='First Name'></input>
      <input className='userInput' placeholder='Last Name'></input>
      <input className='userInput' placeholder='Preferred Username'></input>
      <input className='userInput' placeholder='Email Address'></input>
      <input className='userInput' placeholder='Enter Password'></input>
      <input className='userInput' placeholder='Confirm Password'></input>
      <button className='registerBtn' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
