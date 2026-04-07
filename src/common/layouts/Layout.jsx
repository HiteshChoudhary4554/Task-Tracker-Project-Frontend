import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-3 flex flex-col text-white py-2 min-h-screen bg-gray-950">
      <Outlet />
    </div>
  );
}

export default Layout;
