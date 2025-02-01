import React, { useEffect, useState } from "react";
import customAxios from "../utils/http";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../utils/ReactToast";
import handleCatchError from "../utils/handleCatchError";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: "farmer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (formData?.password !== formData?.confirmPassword) {
        showToast("Password do not match", "warn");
        return;
      }
      const { name, email, password, role } = formData;
      const newFormData = { name, email, password, role };
      const response = await customAxios.post("/auth/signup.php", newFormData);
      if (response.status === 200) {
        navigate("/login");
        showToast("User Created Successfully !! Please Login", "success");

        setIsLoading(false);
      }
    } catch (error) {
      handleCatchError(error, navigate);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "FuGrow | Signup ";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Join Fugrow</h1>
          <p className="text-sm text-gray-600">
            Create an account to explore the future of agriculture.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label htmlFor="name" className="block text-sm text-gray-700">
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-left">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email
            </label>
            <input
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
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-700"
            >
              Confirm Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-left">
            <label htmlFor="role" className="block text-sm text-gray-700">
              Role
            </label>
            <select
              name="role"
              id="role"
              value={formData?.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="farmer">Farmer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
          <Link to="/" className="text-green-600 hover:underline block mt-2">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
