import React, { useState } from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContex } from "../../context/SocketContex";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConvesation, setSelectedConvesation } = useConversation();
  const isSelected = selectedConvesation?._id === conversation._id;

  const { onlineUsers } = useSocketContex();
  const isActive = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-slate-100 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500 " : ""
        }`}
        onClick={() => setSelectedConvesation(conversation)}
      >
        <div className={`avatar ${isActive ? "online" : ""} `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-700">{conversation.username} </p>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
