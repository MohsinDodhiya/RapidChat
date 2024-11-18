import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import LogoutButton from "./LogoutButton";
import capitalizeFirstLetter from "../../utils/capital";
import Logo from "../../assets/logo-wc.png";

const Header = () => {
  const { authUser } = useAuthContext();
  const un = capitalizeFirstLetter(authUser.username);

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-slate-500 text-white font-bold bg-gradient-to-t from-gray-400 to-transparent mb-1">
      <div className="flex items-center">
        <img src={Logo} className="h-14 w-auto mr-4" />
      </div>

      <div className="flex items-center">
        <h3 className="mr-4 font-bold text-xl">{un}</h3>
        <img
          src={authUser.profilepic}
          alt=""
          className="h-11 w-auto rounded-full mr-4"
        />
        <div className="pb-2">
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
