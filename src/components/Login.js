import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

const Login = () => {
  const loginInWithGoogle = () => {
    // Googleでログインする処理
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
