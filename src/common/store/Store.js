import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../modules/auth/authSlice.js";
import taskReducer from "../../modules/task/taskSlice.js";

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
});
