import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginPopup =()=>{
    setIsActive(!isActive)
  }
  const handleRegisterPopup =()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    
    <div className='homeContainer'>
      <div className='Main'>
        <h2 className='uliza'>ULIZA</h2>
        <h3 className='welcomeTxt'>Welcome to the Uliza App</h3>
        <p className='para1'>Do you have bugging questions?</p>
        <h2 className='para2'>Here you get to ask any kind of question, answer
            any question, comment on an answer and also                   
            pick your most preferred answer
        </h2>
        <button className='registerBtn' onClick={handleRegisterPopup}>Create Account</button>
        {isOpen && (<Register/>)}
        <p className='loginTxt'>Already have an account?, Log in below</p>
        <button className='loginBtn' onClick={handleLoginPopup}>Log In</button>
        {isActive && (<Login/>)}

      </div>
    </div>
    </>
  )
}

export default Home
