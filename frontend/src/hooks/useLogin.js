import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// Utility function to add timeout to fetch requests
const fetchWithTimeout = (url, options = {}, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeout))
  ]);
};

// Function to handle input validation
const handleInputError = (email, password) => {
  if (!email || !password) {
    toast.error("Please fill all the fields");
    return true;
  }

  return false;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  // Login function
  const login = async (email, password) => {
    const checkError = handleInputError(email, password);

    if (checkError) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetchWithTimeout("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      // Check if the response is OK
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Response Error:", errorText);
        throw new Error(`Login failed: ${res.status} - ${errorText}`);
      }

      // Try to parse the response as JSON
      const data = await res.json();
      console.log("Login Data:", data);

      // Store the token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setAuthUser(data.user);

      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
      console.error("Login Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
