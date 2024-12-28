import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Details = () => {
  const { id } = useParams(); // Fetch the book ID from the URL
  const [book, setBook] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    fetchBookDetails();
  }, []);

  // Fetch a single book by ID
  const fetchBookDetails = async () => {
    const API_KEY = "AIzaSyAKw95hm_jMnUOONxbE28hCA9CDN3rEu_0";
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };
    // Check if the book is already in favorites
    const checkIfFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isFav = favorites.some((fav) => fav.id === id);
        setIsFavorite(isFav);
      };
    
      // Handle toggle favorite
      const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isFavorite) {
          // Remove from favorites
          const updatedFavorites = favorites.filter((fav) => fav.id !== id);
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          setPopupMessage("Removed from Favorites");
        } else {
          // Add to favorites
          const bookDetails = {
            id,
            title: book.volumeInfo.title,
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || "",
          };
          favorites.push(bookDetails);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          setPopupMessage("Added to Favorites");
        }
        setIsFavorite(!isFavorite);
    
        // Show popup message
        setTimeout(() => setPopupMessage(""), 2000);
      };

  return (
    <div className=" bg-[#F2F2F2] h-screen font-secondary">
        {popupMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-2 rounded z-10">
          {popupMessage}
        </div>
      )}
      {book ? (
        <div className="bg-white shadow-lg rounded-lg max-w-lg mx-auto">
          <div className="flex flex-col justify-center items-center relative">
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x192?text=No+Image"
                }
                alt={book.volumeInfo.title}
                className="w-full h-[550px] object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/0 -bottom-[1px] " />
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x192?text=No+Image"
                }
                alt={book.volumeInfo.title}
                className="w-[200px] h-[300px] absolute rounded-[10px] object-cover"
              />
              <h1 className="text-2xl font-bold mt-4 absolute bottom-[80px] text-center">{book.volumeInfo.title}</h1>
              <p className="text-gray-600 absolute bottom-[60px] text-center">{book.volumeInfo.authors}</p>  
              <div className="absolute top-8 left-8">
                <Link to='/home'>
                    <FaLessThan className="text-3xl text-white " />
                </Link>
              </div>
              <div className="absolute top-8 right-8">
                <MdFavorite className={`text-3xl ${isFavorite ? "text-yellow-400" : "text-white"}`}
                onClick={toggleFavorite}
               />
              </div>
          </div>
          <div className="flex justify-center items-center mx-4 gap-5 -mt-[40px] absolute">
            <div className="border border-solid border-gray-600 px-8 py-5 w-[120px] rounded-[20px] flex flex-col justify-center items-center">
                <p className="text-gray-600">Rating</p>
                <p className="text-xl font-bold">{book.volumeInfo.averageRating || "N/A"}</p>
            </div>
            <div className="border border-solid border-gray-600 px-8 py-5 w-[120px] rounded-[20px] flex flex-col justify-center items-center">
                <p className="text-gray-600">Pages</p>
                <p className="text-xl font-bold">{book.volumeInfo.pageCount || "N/A"}</p>
            </div>
            <div className="border border-solid border-gray-600 px-8 py-5 w-[120px] rounded-[20px] flex flex-col justify-center items-center">
                <p className="text-gray-600">Language</p>
                <p className="text-xl font-bold">{book.volumeInfo.language?.toUpperCase() || "N/A"}</p>
            </div>
          </div>
          <div className="mt-20 flex flex-col mx-4">
                <button className="bg-[#FF8E2B] text-white py-3 rounded mb-4 hover:opacity-85">Read Book </button>
                <p className="font-bold text-xl">About the Book</p>
                {book.volumeInfo.description ? (
                    <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
                    ></p>
                ) : (
                    <p className="text-gray-600">No description available.</p>
                )}
                {/* <p className="font-bold text-xl">Author</p> */}
                {/* <p className="text-gray-600">{ book.volumeInfo.authors}</p> */}
          </div>
        
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default Details;




// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { MdFavorite } from "react-icons/md";
// import { FaLessThan } from "react-icons/fa";

// const Details = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");

//   useEffect(() => {
//     fetchBookDetails();
//     checkIfFavorite();
//   }, []);

//   // Fetch book details
//   const fetchBookDetails = async () => {
//     const API_KEY = "YOUR_API_KEY";
//     const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setBook(data);
//     } catch (error) {
//       console.error("Error fetching book details:", error);
//     }
//   };

//   // Check if the book is already in favorites
//   const checkIfFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const isFav = favorites.some((fav) => fav.id === id);
//     setIsFavorite(isFav);
//   };

//   // Handle toggle favorite
//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     if (isFavorite) {
//       // Remove from favorites
//       const updatedFavorites = favorites.filter((fav) => fav.id !== id);
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setPopupMessage("Removed from Favorites");
//     } else {
//       // Add to favorites
//       const bookDetails = {
//         id,
//         title: book.volumeInfo.title,
//         thumbnail: book.volumeInfo.imageLinks?.thumbnail || "",
//       };
//       favorites.push(bookDetails);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       setPopupMessage("Added to Favorites");
//     }
//     setIsFavorite(!isFavorite);

//     // Show popup message
//     setTimeout(() => setPopupMessage(""), 2000);
//   };

//   return (
//     <div className="bg-[#F2F2F2] h-screen font-secondary">
//       {popupMessage && (
//         <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
//           {popupMessage}
//         </div>
//       )}
//       {book ? (
//         <div className="bg-white shadow-lg rounded-lg max-w-lg mx-auto">
//           <div className="flex flex-col justify-center items-center relative">
//             <img
//               src={
//                 book.volumeInfo.imageLinks?.thumbnail ||
//                 "https://via.placeholder.com/128x192?text=No+Image"
//               }
//               alt={book.volumeInfo.title}
//               className="w-full h-[550px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/0 -bottom-[1px]" />
//             <img
//               src={
//                 book.volumeInfo.imageLinks?.thumbnail ||
//                 "https://via.placeholder.com/128x192?text=No+Image"
//               }
//               alt={book.volumeInfo.title}
//               className="w-[200px] h-[300px] absolute rounded-[10px] object-cover"
//             />
//             <h1 className="text-2xl font-bold mt-4 absolute bottom-[80px]">
//               {book.volumeInfo.title}
//             </h1>
//             <p className="text-gray-600 absolute bottom-[60px]">
//               {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
//             </p>
//             <div className="absolute top-8 left-8">
//               <Link to="/home">
//                 <FaLessThan className="text-3xl text-white" />
//               </Link>
//             </div>
//             <div className="absolute top-8 right-8">
//               <MdFavorite
//                 className={`text-3xl ${isFavorite ? "text-yellow-400" : "text-white"}`}
//                 onClick={toggleFavorite}
//               />
//             </div>
//           </div>
//           <div className="mt-20 flex flex-col mx-4">
//             <p className="font-bold text-xl">About the Book</p>
//             {book.volumeInfo.description ? (
//               <p
//                 className="text-gray-600"
//                 dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
//               ></p>
//             ) : (
//               <p className="text-gray-600">No description available.</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <p>Loading book details...</p>
//       )}
//     </div>
//   );
// };

// export default Details;
