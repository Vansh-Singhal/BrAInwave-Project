// src/pages/Login.js
import React from 'react';
import TextInput from '../SignUpInput/TextInput';
import Button from '../SignUpBtn/Button';

function LogIn() {
  return (
    <form className="space-y-4">
      <TextInput label="Email" type="email" required />
      <TextInput label="Password" type="password" required />
      <Button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Login
      </Button>
    </form>
  );
}

export default LogIn;
