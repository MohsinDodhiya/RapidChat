import React from "react";
import MessageContainer from "../components/Messages/MessageContainer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Header from "../components/Sidebar/Header.jsx";

const Home = () => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-gray-200 m-6 shadow-sm">
      <Header />
      <div className="flex flex-grow sm:h-[450px] md:h-[520px] rounded-lg overflow-hidden bg-gray-200 m-6 shadow-sm">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
