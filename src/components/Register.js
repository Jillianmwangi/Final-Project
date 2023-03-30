import { useState } from "react"
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import { Link } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVdaLLBCeGG-ONiFm3RrFJjYis8EQsLnc",
  authDomain: "finalproject-91b20.firebaseapp.com",
  projectId: "finalproject-91b20",
  storageBucket: "finalproject-91b20.appspot.com",
  messagingSenderId: "365438829841",
  appId: "1:365438829841:web:4470d46e5d548d638bf8b0"
};
firebase.initializeApp(firebaseConfig)


function Register() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmPasssword, setConfirmPasssword] = useState('')
  
  const handleRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
      // User registered successfully
    })
    .catch((error)=>{
      console.log(error.message);
    });
  }



  return (
    <div className='registerContainer'>
      <h2>Create Account</h2>
      <input className='userInput' placeholder='First Name'/>
      <input className='userInput' placeholder='Last Name'/>
      <input className='userInput' placeholder='Preferred Username'/>
      <input className='userInput' placeholder='Email Address'onChange={(e)=>setEmail(e.target.value)}/>
      <input className='userInput' placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)}/>
      <input className='userInput' placeholder='Confirm Password'/>
      <button className='registerBtn' onClick={handleRegister}><Link className="navLinkz" to ="/Questions">Register</Link></button>
    </div>
  )
}

export default Register
