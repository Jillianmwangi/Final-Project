import { useEffect, useState } from "react";
import PostPopup from "./PostPopup";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../Redux/Slice/Slice";
import { Link } from "react-router-dom";

function Questions() {
  const [isClicked, setIsClicked] = useState(false);
  // const [question, setQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handlePostPopup = () => {
    setIsClicked(!isClicked);
    console.log("u clicked me");
  };



  const handleAddAnswer = () => {
    setShowAnswer(showAnswer);
    console.log("answered");
  };

  const dispatch = useDispatch();
  let { questions } = useSelector((state) => {
    return state;
  });
  console.log(questions.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      <div className="QuestionContainer">
        <h3 className="userWelcome">Welcome back, Milly Rock</h3>
        <div className="upperDiv">
          <input
            className="inputBox"
            placeholder="Search for a question"
          ></input>
          <button className="postBtn" onClick={handlePostPopup}>
            Ask a Question
          </button>
          {isClicked && <PostPopup />}
        </div>
        <div className="questionDiv">
          {questions.questions.map((question) => {
            return (
              <div className="quizDisplay">
                <p className="quizTxt">{question.question}</p>

                <div className="Buttons">
                  <button className="answerBtn">
                    <Link className="navLinkz" to="/Answers">
                      Answer
                    </Link>
                  </button>
                  <button className="viewBtn">
                    <Link className="navLinkz" to="/Answers">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Questions;
