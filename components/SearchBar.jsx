import React, { useState } from "react";
import { assets, songsData } from "../assets/assets";

const SearchBar = ({ onClose, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (query.trim() === "") return;

    const results = songsData.filter((song) =>
      song.name.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(results);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-4 rounded-md shadow-lg w-[80%] max-w-md">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">Search Songs</h2>
          <button onClick={onClose} className="text-gray-400 text-xl">&times;</button>
        </div>
        <div className="flex items-center gap-3 border border-gray-600 p-2 rounded-md">
          <input
            type="text"
            placeholder="What's in your mind?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent text-lg font-bold outline-none w-full text-white"
          />
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 h-5 cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
