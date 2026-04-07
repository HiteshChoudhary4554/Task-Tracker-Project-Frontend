import reqAxios from "../../../common/hooks/useAxios.js";

class User {
  static async register({ name, email, password, avatar }) {
    try {
      if (!name || !email || !password || !avatar) {
        throw new Error("register => provide all required field");
      }

      const options = {
        data: {
          name,
          email,
          password,
          avatar: avatar[0],
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const user = await reqAxios("Post", "/user/register", options);

      if (!user) {
        throw new Error("something went wrong while register user.");
      }

      return user;
    } catch (error) {
      console.error("register err :- ", error.message);
    }
  }

  static async login({ email, password }) {
    try {
      if (!email || !password) {
        throw new Error("login => provide all required field");
      }

      const options = {
        data: {
          email,
          password,
        },
      };

      const user = await reqAxios("Post", "/user/login", options);

      if (!user) {
        throw new Error("something went wrong while logging in user.");
      }

      // set local storage accessToken and refreshToken here
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("refreshToken", user.refreshToken);

      return user;
    } catch (error) {
      console.error("login err :-", error.message);
    }
  }

  static async verifyEmail({ verificationToken }) {
    try {
      if (!verificationToken) {
        throw new Error("verifyEmail => provide all required field");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${verificationToken}`,
        },
      };

      const verifiedUser = await reqAxios(
        "post",
        "/user/verify-email",
        options,
      );

      if (!verifiedUser) {
        throw new Error("something went wrong while verifying email.");
      }

      return verifiedUser;
    } catch (error) {
      console.error("verifyEmail err :-", error.message);
    }
  }

  static async logout() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("logout => accessToken not found");
      }
      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      await reqAxios("delete", "/user/logout", options);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      return true;
    } catch (error) {
      console.error("logout err :-", error.message);
    }
  }

  static async refreshAccessToken() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        throw new Error("refreshAccessToken => refreshToken not found");
      }

      const options = {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      };

      const freshToken = await reqAxios("patch", "/user/refresh", options);

      if (!freshToken) {
        throw new Error("something went wrong while refreshing access token.");
      }

      // update local storage accessToken here
      localStorage.setItem("accessToken", freshToken.accessToken);
      localStorage.setItem("refreshToken", freshToken.refreshToken);

      return true;
    } catch (error) {
      console.error("refreshAccessToken err :-", error.message);
    }
  }

  static async forgotPassword({ email }) {
    try {
      if (!email) {
        throw new Error("forgotPassword => provide all required field");
      }

      const options = {
        data: {
          email,
        },
      };

      const isForgot = await reqAxios("post", "/user/forgot-password", options);

      if (!isForgot) {
        throw new Error(
          "something went wrong while processing forgot password request.",
        );
      }

      return true;
    } catch (error) {
      console.error("forgotPassword err :-", error.message);
    }
  }

  static async newPassword({ resetToken, newPassword }) {
    try {
      if (!resetToken || !newPassword) {
        throw new Error("newPassword => provide all required field");
      }

      const options = {
        data: {
          resetToken,
          newPassword,
        },
      };

      const userObj = await reqAxios("post", "/user/new-password", options);

      if (!userObj) {
        throw new Error(
          "something went wrong while processing new password request.",
        );
      }

      return true;
    } catch (error) {
      console.error("newPassword err :-", error.message);
    }
  }

  static async getMe() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("getMe => accessToken not found");
      }
      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const user = await reqAxios("get", "/user/get-me", options);

      if (!user) {
        throw new Error(
          "something went wrong while processing get-me request.",
        );
      }

      return user;
    } catch (error) {
      console.error("logout err :-", error.message);
    }
  }

  static async health() {
    try {
      const status = await reqAxios("get", "/user/health");
      return status;
    } catch (error) {
      console.error("health err :- ", error.message);
    }
  }
}

export default User;
