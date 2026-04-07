import React from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-100">
        <Login />
      </div>
      <Link
        to={"/auth/forgot-password"}
        className="pt-2 text-blue-500 hover:underline active:underline"
      >
        forgot password now
      </Link>
      <Link
        to={"/auth/sign-up"}
        className="pt-2 text-blue-500 hover:underline active:underline"
      >
        create new account
      </Link>
    </div>
  );
}

export default Signin;
