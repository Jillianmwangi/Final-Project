import Navbar from './Navbar'
import { useState } from 'react'
import Postpopup from './Postpopup';

function Questions() {
  const [isClicked, setIsClicked]= useState(false);

  const handlePostPopup = ()=>{
      setIsClicked(!isClicked)
      console.log('u clicked me');
  }

  return (
    <>
    <Navbar/>
    <div className='QuestionContainer'>
        <h3 className='userWelcome'>Welcome back, Milly Rock</h3>
        <div className='upperDiv'>
          <input className='inputBox' placeholder='Search for a question'></input>
          <button className='postBtn' onClick={handlePostPopup}>Ask a Question</button>
          {isClicked && (<Postpopup/>)}
        </div>
        <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='answerBtn'>Answer</button>
            <button className='viewBtn'>View</button>
          </div>
        </div>
        <div className='ansInput'>
          <input className='ansTxt' placeholder='Type Answer'></input>
          <button className='answerBtn'>Add Answer</button>
        </div>
        <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='answerBtn'>Answer</button>
            <button className='viewBtn'>View</button>
          </div>
        </div>
        <div className='questionDiv'>
          <p className='quizTxt'>Q1: Tell me about you!</p>
          <div className='Buttons'>
            <button className='answerBtn'>Answer</button>
            <button className='viewBtn'>View</button>
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Questions
