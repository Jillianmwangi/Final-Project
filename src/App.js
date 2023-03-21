import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
// import Postpopup from "./components/Postpopup";
import Profile from './components/Profile';
import Questions from './components/Questions';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Questions" element ={<Questions/>} />
        <Route path="/Profile" element ={<Profile/>} />
      </Routes>

      {/* <Postpopup/> */}
      {/* <Answers/> */}

      
      
    </div>
  );
}

export default App;
