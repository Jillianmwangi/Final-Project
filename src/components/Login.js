import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVdaLLBCeGG-ONiFm3RrFJjYis8EQsLnc",
  authDomain: "finalproject-91b20.firebaseapp.com",
  projectId: "finalproject-91b20",
  storageBucket: "finalproject-91b20.appspot.com",
  messagingSenderId: "365438829841",
  appId: "1:365438829841:web:4470d46e5d548d638bf8b0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully logged in, handle any additional logic here
        console.log("Logged in as user:", userCredential.user.email);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <>
      <div className="loginContainer">
        <h2>Log in</h2>
        <input
          type="email"
          value={email}
          className="userInput"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          className="userInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn" onClick={handleLogin}>
          <Link className="navLinkz" to="/Questions">
            Log in
          </Link>
        </button>
      </div>
    </>
  );
}

export default Login;
