import { useState } from "react"




function Login() {
  const [isLoggedIn, setIsLoggedin] = useState(false)
  const handleLogin = ()=>{
    setIsLoggedin(!isLoggedIn)
    console.log("user logged in");
  }
  return (
    <>
    <div className='loginContainer'>
      <h2>Log in</h2>
      <input className='userInput' placeholder='Enter Username'></input>
      <input className='userInput' placeholder='password'></input>
      <button className='loginBtn' onClick={handleLogin}>Log in</button>
      
    </div>
    </>
  )
}

export default Login
