import React from "react";
import { Route } from "react-router-dom";
import * as pages from "./Index.js";

function TaskRoutes() {
  return (
    <>
      <Route path="task/add-task" element={<pages.AddTask />} />
      <Route path="task/cohort-task" element={<pages.CohortTask />} />
      <Route path="task/college-task" element={<pages.CollegeTask />} />
      <Route path="task/dashbord" element={<pages.Dashbord />} />
      <Route path="task/edit-task" element={<pages.EditTask />} />
      <Route path="task/extra-task" element={<pages.ExtraTask />} />
      <Route path="task/ongoing-task" element={<pages.OngoingTask />} />
      <Route path="task/today-task" element={<pages.TodayTask />} />
    </>
  );
}

export default TaskRoutes;
