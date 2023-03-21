import React from 'react'
import Navbar from './Navbar'

function Profile() {
  return (
    <>
    <Navbar/>
    <div>
      <h3 className='userWelcome'>Welcome back, Milly Rock</h3>
      <p className='profIntro'>Below is a list of questions that you asked, click on Edit to update a question</p>
      <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='viewBtn'>Delete</button>
            <button className='viewBtn'>Edit</button>
          </div>
      </div>
      <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='viewBtn'>Delete</button>
            <button className='viewBtn'>Edit</button>
          </div>
      </div>
      <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='viewBtn'>Delete</button>
            <button className='viewBtn'>Edit</button>
          </div>
      </div>
      <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='viewBtn'>Delete</button>
            <button className='viewBtn'>Edit</button>
          </div>
      </div>
     
      
    </div>
    </>
  )
}

export default Profile
