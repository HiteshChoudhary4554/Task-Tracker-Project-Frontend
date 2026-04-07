import React from "react";
import { Route } from "react-router-dom";
import * as pages from "./Index.js";

function AuthRoutes() {
  return (
    <>
      <Route path="auth/sign-in" element={<pages.Signin />} />
      <Route path="auth/sign-up" element={<pages.Signup />} />
      <Route path="auth/verify-email" element={<pages.VerifyEmail />} />
      <Route path="auth/forgot-password" element={<pages.ForgotPassword />} />
      <Route path="auth/home" element={<pages.Home />} />
    </>
  );
}

export default AuthRoutes;
