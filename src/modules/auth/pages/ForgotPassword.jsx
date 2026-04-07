import React from "react";
import ForgotPasswordCom from "../components/ForgotPasswordCom.jsx";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-120">
        <ForgotPasswordCom />
      </div>
      <Link
        to={"/auth/sign-in"}
        className="pt-2 text-blue-500 hover:underline active:underline"
      >
        lets sign in now.
      </Link>
    </div>
  );
}

export default ForgotPassword;
