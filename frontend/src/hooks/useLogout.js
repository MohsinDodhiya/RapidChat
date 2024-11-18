import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://rapidchat-backend-t0nn.onrender.com/api/auth/logout", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();

      if (!data) {
        throw new Error(data.error);
      }
      localStorage.removeItem("user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
