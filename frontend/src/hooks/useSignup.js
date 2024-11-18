import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const handleInputError = ({
  username,
  email,
  password,
  confirmPass,
  gender,
}) => {
  if (!username || !email || !password || !confirmPass || !gender) {
    toast.error("Please fill all the Field");
    return true;
  }
  if (password !== confirmPass) {
    toast.error("Password does not match");

    return true;
  }
  return false;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ username, email, password, confirmPass, gender }) => {
    const checkError = handleInputError({
      username,
      email,
      password,
      confirmPass,
      gender,
    });

    if (checkError) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("https://rapidchat-backend-t0nn.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPass,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
