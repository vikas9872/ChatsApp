import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { SERVER_URL } from '../main';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../Redux/userSlice';

function Login() {
  const dispatch=useDispatch()
  const {userData}=useSelector(state=>state.user)
  console.log(userData)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/auth/login`,formData,{ withCredentials: true }
      );
      dispatch(setUserData(res.data));
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          onClick={handleLogin}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
