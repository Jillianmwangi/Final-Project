import { Route, Routes } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import Questions from './components/Questions';
import Answers from './components/Answers';

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import fetchQuestions from './Redux/Slice/QSlice'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Questions" element ={<Questions/>} />
        <Route path="/Profile" element ={<Profile/>} />
        <Route path="/Answers" element ={<Answers/>} />
      </Routes>

          
    </div>
  );
}

export default App;
