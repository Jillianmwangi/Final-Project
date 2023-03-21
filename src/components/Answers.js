import React from 'react'
import Navbar from './Navbar'

function Answers() {
  return (
    <>
    <Navbar/>
    <div className='answersContainer'>
       <h3 className='userWelcome'>Welcome back, Milly Rock</h3>
        <p className='ansIntro'>Click on the star to mark your most preferred answer</p>
        <div className='ansDiv'>
          <p className='quizTxt'>Q1,A1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='commentBtn'>Comment</button>
            <button className='commentBtn'>View Comments</button>
            
          </div>
        </div>
    </div>
    </>
  )
}

export default Answers
