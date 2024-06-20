import React, { Fragment } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");      
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src="/logo.png" alt="logo"></img>

      <div className="flex p-4">
        <img className="w-12 h-12" alt="usericon" src="/userIcon.jpg" />
        <button
          onClick={signOutHandler}
          className="font-bold text-red-600 ml-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
