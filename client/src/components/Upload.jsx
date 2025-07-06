import { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

const Upload = () => {
  const [query, setQuery] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  const searchTrailer = async () => {
    try {
      const res = await axios.get(`https://movie-trailer-e86d.onrender.com/api/trailer?q=${query}`);
      setTrailerUrl(res.data.trailerUrl);
    } catch (err) {
      alert("Trailer Not Found");
      setTrailerUrl("");
    }
  }

  return (
    <motion.div
      id="search"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center mb-16"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1 }}

      >
        Search for Movie <br /> and Watch the Trailer
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl">
        {/* Form */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-xl p-8 w-[320px] md:w-[400px] flex flex-col gap-5"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <label className="text-lg font-semibold text-gray-800">Enter Movie Name:</label>
          <input
            type="text"
            placeholder="e.g. Inception"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            onClick={searchTrailer}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white py-2 rounded-lg mt-2 transition-transform duration-300 hover:scale-105 font-medium"
          >
            Click to Search
          </button>
        </motion.form>

        {/* Video Preview */}
        {trailerUrl && (
          <motion.div
            className="rounded-xl shadow-2xl overflow-hidden border-4 border-white w-[320px] md:w-[520px] h-[325px]"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1 }}

            drag
          >

            <motion.iframe
              src={trailerUrl}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1 }}

            ></motion.iframe>

          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Upload;
