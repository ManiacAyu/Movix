import React, { Fragment, useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const result = checkValidation(email.current.value, password.current.value);
    setErrorMessage(result);
    if (result) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage("Failed to sign up. Please try again");
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage("Incorrect email or password");
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <Fragment>
      <Header />
      <div className="absolute">
        <img src="/background.jpg" alt="BgImg" />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="name"
              className="p-4 my-2 w-full bg-transparent border-solid border-2 rounded-lg border-white"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="email"
            className="p-4 my-2 w-full bg-transparent border-solid border-2 rounded-lg border-white"
          />

          <input
            type="text"
            ref={password}
            placeholder="password"
            className="p-4 my-2 w-full bg-transparent border-solid border-2 rounded-lg border-white"
          />
          <p className="text-red-600 mb-2">{errorMessage}</p>
          <button
            className="p-4 my-2 bg-red-600 w-full rounded-lg"
            onClick={submitHandler}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 cursor-pointer" onClick={toggleSignUpForm}>
            {isSignIn
              ? "New to Netflix? Sign up Now"
              : "Already a user? Sign in now"}
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
