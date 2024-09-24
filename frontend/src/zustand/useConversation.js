import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConvesation: null,
  setSelectedConvesation: (selectedConvesation) => set({ selectedConvesation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
