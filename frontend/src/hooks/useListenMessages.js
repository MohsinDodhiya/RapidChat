import { useEffect } from "react";
import notificationSound from "../assets/sounds/notification.mp3";
import useConversation from "../zustand/useConversation";
import { useSocketContex } from "../context/SocketContex";

const useListenMessages = () => {
  const { socket } = useSocketContex();
  const { messages, setMessages } = useConversation();

  //   console.log(messages);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
