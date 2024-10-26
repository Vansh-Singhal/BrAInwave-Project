// src/pages/Signup.js
import React, { useState } from 'react';
import TextInput from '../SignUpInput/TextInput';
import Button from '../SignUpBtn/Button';

function Signup() {
  const [role, setRole] = useState("student");

  return (
    <form className="space-y-4">
      <TextInput label="Email" type="email" required />
      <TextInput label="Password" type="password" required />
      <TextInput label="Confirm Password" type="password" required />
      <div>
        <label className="block text-sm font-medium text-gray-700">I am a:</label>
        <div className="mt-2 flex space-x-4">
          <Button
            className={role === "student" ? "bg-indigo-500 text-white" : "bg-white text-gray-700 border-gray-300"}
            onClick={() => setRole("student")}
          >
            Student
          </Button>
          <Button
            className={role === "writer" ? "bg-indigo-500 text-white" : "bg-white text-gray-700 border-gray-300"}
            onClick={() => setRole("writer")}
          >
            Exam Writer
          </Button>
        </div>
      </div>
      <Button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign Up
      </Button>
    </form>
  );
}

export default Signup;
