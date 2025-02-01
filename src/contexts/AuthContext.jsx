import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/ReactToast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Adding loading state
  const navigate = useNavigate();

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    if (!userid || !username || !role) {
      setLoading(false);
      if (location.pathname.startsWith("/dashboard")) {
        // Redirect to login ONLY if user is trying to access a protected route
        navigate("/login");
        showToast("Login Required!!", "info");
      }
      else if (location.pathname.startsWith("/admin")) {
        // Redirect to login ONLY if user is trying to access a protected route
        navigate("/admin/login");
        showToast("Login Required!!", "info");
      }
    }
    else {
      validateToken(userid,username,role);
    }
  }, []);

  const validateToken = async (userid,username,role) => {
    try {
      if (userid && username && role) {
        setIsAuthenticated(true);
      } else {
        logout(); // Call logout only if the token is invalid
      }
    } catch (error) {
      showToast("Session Expired, Please login !!", 'warn');
      logout();
    } finally {
      setLoading(false); // Loading complete after validation attempt
    }
  };

  const login = (userid,username,role) => {
    localStorage.setItem("userid", userid);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
