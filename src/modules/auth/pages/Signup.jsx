import React from "react";
import Register from "../components/Register";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-100">
        <Register />
      </div>
      <Link to={"/auth/sign-in"} className="pt-2 text-blue-500 hover:underline active:underline" >
        already have an account? sign in
      </Link>
    </div>
  );
}

export default Signup;
