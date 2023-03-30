import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../Redux/Slice/Slice";
import { Link } from 'react-router-dom';

function Post() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAddQuestion = () => {
    setShowQuestion(true);
    const newQuestion = {
      question,
    };
    dispatch(addQuestion(newQuestion));
    console.log(newQuestion);
  };

  return (
    <div className="postContainer">
      <h2>Pose a Question Today!</h2>
      <p>Satisfy your curiosity by typing a question below</p>
      <input
        className="postInput"
        placeholder="Type question"
        onChange={handleQuestionChange}
      ></input>
      <button className="postBtn" onClick={handleAddQuestion}>
        {" "}
        <Link className="navLinkz" to="/Questions">
          Post
        </Link>
      </button>
    </div>
  );
}

export default Post;
