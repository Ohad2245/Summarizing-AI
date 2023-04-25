/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import AuthModal from "./Authentication/AuthModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import UserSidebar from "./Authentication/UserSidebar";

const Hero = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full nb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        {/* <button
          type="button"
          onClick={() => window.open("https://github.com/Ohad2245")}
          className="black_btn"
        >
          GitHub
        </button> */}
        {user ? <UserSidebar user={user}/> : <AuthModal />}
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
