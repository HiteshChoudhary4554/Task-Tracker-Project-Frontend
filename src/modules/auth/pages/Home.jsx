import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-1 bg-gray-900 text-white flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Task Tracker</h1>

        <p className="text-gray-400 max-w-xl mb-6">
          Manage your tasks efficiently and boost your productivity. This is
          your all-in-one task management solution.
        </p>

        <div className="flex gap-4">
          <Link
            to="/auth/sign-in"
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            to="/auth/sign-up"
            className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
