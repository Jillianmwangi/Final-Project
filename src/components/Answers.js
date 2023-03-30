import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {fetchAnswers} from "../Redux/Slice/Slice";

function Answers() {
  const [showAnswer, setShowAnswer] = useState(false);

    const handleInputAnswer = (event) => {
    setShowAnswer(event.target.value);
    console.log("add input");
  };


  const dispatch = useDispatch();
  let{answers} = useSelector((state)=>{
    return state;
  });
  
  useEffect(()=>{
    dispatch(fetchAnswers());
  }, []);

  return (
    <>
      <div className="answersContainer">
        <h3 className="userWelcome">Welcome back, Milly Rock</h3>
        <p className="ansIntro">
          *Click on the star to mark your most preferred answer
        </p>
        <div className="ansInput">
          <input className="ansTxt" placeholder="Type Answer" onChange = {handleInputAnswer}></input>
          <button className="answerBtn">Add Answer</button>
        </div>
        <div className="ansDiv">
          {/* {answers.answers.map((answer)=>{
            return(
              <>
          <p className="quizTxt"></p>
          <div className="Buttons">
            <button className="commentBtn">Comment</button>
            <button className="commentBtn">View Comments</button>
          </div> 
           </>
            );
          })} */}

        </div>
      </div>
    </>
  );
}

export default Answers;
