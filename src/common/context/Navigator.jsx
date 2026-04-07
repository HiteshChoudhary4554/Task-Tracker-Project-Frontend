import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import User from "../../modules/auth/services/user.service.js";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../modules/auth/authSlice.js";

function Navigator() {
  const authStatus = useSelector((state) => state.auth.authStatus);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        let user = await User.getMe();

        if (!user) {
          const refreshed = await User.refreshAccessToken();

          if (refreshed) {
            user = await User.getMe();
          }
        }

        if (user) {
          dispatch(login(user));
        }
      } catch (error) {
        console.error("Navigator Err :- ", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return (
      <div className=" flex-1 flex justify-center items-center">
        <h2>..loading</h2>
      </div>
    );
  } else {
    return authStatus ? (
      <Navigate to="task/dashbord" />
    ) : (
      <Navigate to="auth/home" />
    );
  }
}

export default Navigator;
