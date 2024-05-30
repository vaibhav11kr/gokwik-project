import React from "react";
import { auth, provider, signInWithPopup } from "../auth/firebase";
import logo from "../assets/Glogo.webp";
const SignInButton = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-[#0175E6] hover:bg-[#005bb5] focus:outline-none text-white font-normal ml-4 p-1 w-[auto] flex items-center rounded"
    >
      <span className="bg-white h-10 w-10 flex items-center justify-center mr-4">
        <img src={logo} alt="" className="h-5 w-5" />
      </span>
      <p className="mr-3">Sign in with Google</p>
    </button>
  );
};

export default SignInButton;
