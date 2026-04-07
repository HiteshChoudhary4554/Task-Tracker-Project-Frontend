import { Routes, Route } from "react-router-dom";
import * as pages from "./Index.js";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<pages.Layout />}>
        <Route
          index
          element={
              <pages.Navigator />
          }
        />
        {pages.AuthRoutes()}
        {pages.TaskRoutes()}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
