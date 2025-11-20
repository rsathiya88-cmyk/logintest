import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const customer = location.state?.customer;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Login Success</h1>

        {customer ? (
          <p className="text-gray-700 mb-4">Welcome, <span className="font-bold">{customer}</span>!</p>
        ) : (
          <p className="text-gray-700 mb-4">You have successfully logged in.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
