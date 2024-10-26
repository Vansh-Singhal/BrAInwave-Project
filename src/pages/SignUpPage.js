// src/App.js
import React, { useState } from 'react';
import LogIn from '../components/Signup/LogIn';
import Signup from '../components/Signup/SignUp';

function SignUpPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome to ExamAssist</h2>
          <p className="text-center text-gray-600 mb-6">Login or create an account to get started</p>
          
          <div className="mb-6">
            <div className="flex border-b">
              <button
                className={`flex-1 py-2 px-4 text-center font-semibold ${activeTab === "login" ? "text-indigo-500 border-b-2 border-indigo-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center font-semibold ${activeTab === "signup" ? "text-indigo-500 border-b-2 border-indigo-500" : "text-gray-500"}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
          </div>

          {activeTab === "login" ? <LogIn /> : <Signup />}
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            By signing up, you agree to our 
            <a href="#" className="text-indigo-500 hover:underline">Terms of Service</a> 
            and 
            <a href="#" className="text-indigo-500 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
