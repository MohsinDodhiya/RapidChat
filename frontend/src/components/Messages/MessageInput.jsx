import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {
  const [message, setMessgae] = useState("");
  const { loading, sendMessages } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) {
      return;
    }
    await sendMessages(message);
    setMessgae("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative shadow-md">
        <input
          type="text"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessgae(e.target.value)}
          className="w-full p-2 border rounded-md bg-slate-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparentz0"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
