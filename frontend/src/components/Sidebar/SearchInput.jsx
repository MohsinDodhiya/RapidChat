import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConvesation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }

    const conversation = conversations.find((con) =>
      con.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConvesation(conversation);
      setSearch("");
    } else {
      toast.error("No user fount with this Username");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
