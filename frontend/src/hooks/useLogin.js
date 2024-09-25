import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

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

  const login = async (email, password) => {
    const checkError = handleInputError(email, password);

    if (checkError) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        const errorData = errorText
          ? JSON.parse(errorText)
          : { error: "Login failed" };
        throw new Error(errorData.error || "Login failed");
      }

      const data = await res.json();
      console.error("😀Login Data:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setAuthUser(data.user);

      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.message);
      console.error("😀Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
