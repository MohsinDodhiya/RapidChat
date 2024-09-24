import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvesation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/messages/${selectedConvesation._id}`);
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConvesation?._id) {
      getMessages();
    }
  }, [selectedConvesation?._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
