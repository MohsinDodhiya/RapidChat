import React, { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation.js";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvesation } = useConversation();

  const sendMessages = async (message) => {
    try {
      setLoading(true);

      const res = await fetch(`/api/messages/send/${selectedConvesation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessages, loading };
};

export default useSendMessage;
