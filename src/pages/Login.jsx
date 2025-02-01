import React, { useEffect, useState } from "react";
import customAxios from "../utils/http";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../utils/ReactToast";
import handleCatchError from "../utils/handleCatchError";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await customAxios.post("/auth/login.php", formData);
      if (response.data.success) {
        const { userid, username,role } = response.data.data;

        // Setting in the AuthContext
        login(userid, username,role);
        navigate('/')
        showToast("Login Successfully !!", "success");

        setIsLoading(false);
        return;
      }

      showToast("Invalid Credentials!!", "error");
      setFormData({ email: "", password: "" });
    } catch (error) {
      handleCatchError(error, navigate);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "FuGrow | Login ";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
        <div className="mb-6">
          <img src="a.jpg" alt="Fugrow Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">Welcome to Fugrow</h1>
          <p className="text-sm text-gray-600">Login to access your account and explore the future of agriculture.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link>
          </p>
          <Link to="/" className="text-green-600 hover:underline block mt-2">Go to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
