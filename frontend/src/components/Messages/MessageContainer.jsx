import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import useConversation from "../../zustand/useConversation.js";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext.jsx";
import capitalizeFirstLetter from "../../utils/capital.js";

const MessageContainer = () => {
  const { selectedConvesation, setSelectedConvesation } = useConversation();
  const { authUser } = useAuthContext();
  const un = authUser.username;
  useEffect(() => {
    return () => setSelectedConvesation(null);
  }, [setSelectedConvesation]);

  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConvesation ? (
        <NoChatSelected username={un} />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 text-white bg-gradient-to-t from-gray-400 to-transparent">
            <span className="label-text text-slate-50">To: </span>
            <span className="text-slate-100 font-bold">
              {selectedConvesation?.username}
            </span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = ({ username }) => {
  const un = capitalizeFirstLetter(username);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-slate-800 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome{" "}
          <span className="inline-block mt-0 rounded-lg font-medium text-blue-500 px-1 relative ">
            {un}
          </span>
        </p>

        <p>Select a chat to start messaging</p>

        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
