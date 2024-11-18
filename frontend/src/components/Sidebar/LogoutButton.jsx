import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto pt-2">
      {!loading ? (
        <BiLogOut
          className="w-9 h-9 text-red-500 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
