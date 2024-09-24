import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formetTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConvesation } = useConversation();
  const MessageFromMe = message.senderId === authUser._id;
  const chatClassNm = MessageFromMe ? "chat-end" : "chat-start";
  const profilepic = MessageFromMe
    ? authUser.profilepic
    : selectedConvesation.profilepic;
  const chatColor = MessageFromMe ? "bg-green-500" : "";
  const formattedTime = formatTime(message.createdAt);
  return (
    <div className={`chat ${chatClassNm}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilepic} alt="User Avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white: ${chatColor}`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
