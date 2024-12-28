import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { CiSearch } from "react-icons/ci";
import logo from "./Images/logo.png";
import bookmate from "./Images/BOOK MATE.png";

const Home = () => {
  const [books, setBooks] = useState([]); // Stores books fetched from the API
  const [trendingBooks, setTrendingBooks] = useState([]); // Stores trending books
  const [searchTerm, setSearchTerm] = useState(""); // Tracks user input for search
  const categories = ["Adventure", "History", "Romance", "Drama", "Horror", "Science"]; // Categories

  // Fetch books when the page loads
  useEffect(() => {
    fetchBooks("all"); // Default search term
    fetchTrendingBooks();
  }, []);

  // Function to fetch books
  const fetchBooks = async (query) => {
    const API_KEY = "AIzaSyAKw95hm_jMnUOONxbE28hCA9CDN3rEu_0";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to fetch trending books
  const fetchTrendingBooks = async () => {
    const API_KEY = "AIzaSyAKw95hm_jMnUOONxbE28hCA9CDN3rEu_0";
    const url = `https://www.googleapis.com/books/v1/volumes?q=trending&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTrendingBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching trending books:", error);
    }
  };



  return (
    <div>
      <div className="h-full flex flex-col font-secondary">
        <Nav />
        <div className="flex flex-col mb-[120px]">
          {/* Logo Section */}
          <div className="flex items-center gap-3 pt-10 pl-7">
            <img src={logo} alt="logo" className="w-[25px]" />
            <img src={bookmate} alt="bookmate" className="w-[85px]" />
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              className="bg-[#F2F2F2] shadow-lg mt-5 mx-5 rounded-full py-5 pl-12 w-[90%]"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchBooks(searchTerm);
              }}
            />
            <CiSearch
              className="absolute top-[46px] left-[40px] cursor-pointer"
              onClick={() => fetchBooks(searchTerm)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex overflow-x-auto mt-6 px-5 gap-3">
            {categories.map((category) => (
              <button
                key={category}
               className=" text-[#433728] border border-[#DBC6B4] py-2 px-4 rounded-full whitespace-nowrap hover:bg-black hover:text-white transition"
                onClick={() => fetchBooks(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* My Books Section */}
          <div className="font-bold text-xl text-[#193A6F] pl-8 pt-8">
            <p>My Books</p>
          </div>

          <div className="mt-3 overflow-x-auto whitespace-nowrap px-5">
            {books.map((book) => {
              const title = book.volumeInfo.title || "Unknown Title";
              const authors = book.volumeInfo.authors || ["Unknown Author"];
              const shortTitle =
                title.length > 20 ? `${title.slice(0, 20)}...` : title;
              const shortAuthors =
                authors.join(", ").length > 20
                  ? `${authors.join(", ").slice(0, 20)}...`
                  : authors.join(", ");

              return (
                <div
                  key={book.id}
                  className="inline-block rounded transition bg-white mx-4"
                >
                  <img
                    src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      "https://via.placeholder.com/128x192?text=No+Image"
                    }
                    alt={title}
                    className="w-[140px] h-[200px] object-cover rounded-[10px] cursor-pointer"
                    onClick={() => (window.location.href = `/details/${book.id}`)}
                  />
                  <h3 className="text-sm font-semibold mt-2">{shortTitle}</h3>
                  <p className="text-xs text-gray-600">{shortAuthors}</p>
                </div>
              );
            })}
          </div>

          {/* Trending Books Section */}
          <div className="font-bold text-xl text-[#193A6F] pl-8 pt-8">
            <p>Trending Books</p>
          </div>

          <div className="mt-3 overflow-x-auto whitespace-nowrap px-5">
            {trendingBooks.map((book) => {
              const title = book.volumeInfo.title || "Unknown Title";
              const authors = book.volumeInfo.authors || ["Unknown Author"];
              const shortTitle =
                title.length > 20 ? `${title.slice(0, 20)}...` : title;
              const shortAuthors =
                authors.join(", ").length > 20
                  ? `${authors.join(", ").slice(0, 20)}...`
                  : authors.join(", ");

              return (
                <div
                  key={book.id}
                  className="inline-block rounded transition bg-white mx-4"
                >
                  <img
                    src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      "https://via.placeholder.com/128x192?text=No+Image"
                    }
                    alt={title}
                    className="w-[140px] h-[200px] object-cover rounded-[10px] cursor-pointer"
                    onClick={() => (window.location.href = `/details/${book.id}`)}
                  />
                  <h3 className="text-sm font-semibold mt-2">{shortTitle}</h3>
                  <p className="text-xs text-gray-600">{shortAuthors}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
