import React from "react";
import CohortTask from "../components/CohortTask.jsx";
import CollegeTask from "../components/CollegeTask.jsx";
import ExtraTask from "../components/ExtraTask.jsx";
import OngoingTask from "../components/OngoingTask.jsx";
import TodayTask from "../components/TodayTask.jsx";
import Button from "../../../common/components/Button.jsx";
import { useNavigate } from "react-router-dom";
import User from "../../auth/services/user.service.js";
import { useDispatch } from "react-redux";
import { logout as userLogout } from "../../auth/authSlice.js";

function Dashbord() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    const logout = await User.logout();
    if (logout) {
      dispatch(userLogout());
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="border flex flex-col gap-10 rounded-2xl border-gray-600 text-white px-2 py-3 bg-gray-900">
      <div className="flex">
        <div className=" w-[56%] text-end">
          <h1 className="text-2xl font-bold">Task Tracker</h1>
        </div>
        <div className=" flex gap-2 justify-end w-[44%] text-end">
          <Button onClick={() => navigate("/task/add-task")} text="Add Task" color={"blue"} />
          <Button onClick={logout} text="Logout" color={"red"} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        {/* task list */}
        <div
          onClick={() => navigate("/task/cohort-task")}
          className="min-w-90 min-h-100"
        >
          <CohortTask />
        </div>
        <div
          onClick={() => navigate("/task/college-task")}
          className="min-w-90 min-h-100"
        >
          <CollegeTask />
        </div>
        <div
          onClick={() => navigate("/task/extra-task")}
          className="min-w-90 min-h-100"
        >
          <ExtraTask />
        </div>
        <div className="flex justify-center gap-10 col-span-3">
          <div
            onClick={() => navigate("/task/ongoing-task")}
            className="min-w-90 min-h-100"
          >
            <OngoingTask />
          </div>
          <div
            onClick={() => navigate("/task/today-task")}
            className="min-w-90 min-h-100"
          >
            <TodayTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
