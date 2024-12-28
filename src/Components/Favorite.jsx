import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Nav from "./Nav";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredFavorites, setFilteredFavorites] = useState([]); // State for filtered favorites

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    setFilteredFavorites(storedFavorites); // Initialize filtered list
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setFilteredFavorites(updatedFavorites); // Update filtered list
  };

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = favorites.filter((book) =>
      book.title.toLowerCase().includes(term)
    );
    setFilteredFavorites(filtered);
  };

  return (
    <div className="h-full font-secondary pb-[100px] mx-3 ">
        <Nav/>
      <h1 className="text-2xl font-bold text-center py-5">Favorites</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-4 relative">
        <input
          type="text"
         className="bg-[#F2F2F2] shadow-lg mt-5 mx-5 rounded-full py-5 pl-12 w-full"
          placeholder="Search your favorites"
          value={searchTerm}
          onChange={handleSearch}
        />

        <CiSearch
        className="absolute top-[46px] left-[40px] cursor-pointer"
        onClick={() => fetchBooks(searchTerm)}
         />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((book) => (
            <div
              key={book.id}
              className=" bg-white shadow-lg"
            >
              <div>
                  <Link to={`/details/${book.id}`} className="">
                    <img
                      src={book.thumbnail || "https://via.placeholder.com/128x192?text=No+Image"}
                      alt={book.title}
                      className="w-[120px] h-[150px] object-cover rounded-[10px] cursor-pointer"
                    />
                    {/* <div className="ml-4">
                      <h2 className="font-bold text-lg">{book.title}</h2>
                    </div> */}
                  </Link>
                  {/* <button
                    className="text-red-500 mt-2"
                    onClick={() => removeFavorite(book.id)}
                  >
                    Remove
                  </button> */}
                  <div className="flex justify-between m-3">
                    <FaTimes onClick={() => removeFavorite(book.id)} />
                    <MdFavorite className="text-yellow-400"/>
                  </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorites match your search!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
