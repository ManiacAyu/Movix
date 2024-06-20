import React, { Fragment, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

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
            placeholder="email"
            className="p-4 my-2 w-full bg-transparent border-solid border-2 rounded-lg border-white"
          />

          <input
            type="text"
            placeholder="password"
            className="p-4 my-2 w-full bg-transparent border-solid border-2 rounded-lg border-white"
          />
          <button className="p-4 my-2 bg-red-600 w-full rounded-lg">
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
