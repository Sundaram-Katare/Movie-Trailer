import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const list = [
  { name: "Life Of Pi", img: "https://prod5.agileticketing.net/images/user/shcac_3673/Life_of_Pi_TMDB-iLgRu4hhSr6V1uManX6ukDriiSc.jpg" },
  { name: "La La Land", img: "https://w0.peakpx.com/wallpaper/737/594/HD-wallpaper-la-la-land-2016-movie-poster.jpg" },
  { name: "Adipurush", img: "https://i.pinimg.com/736x/8c/29/f7/8c29f78f2791b2294486450c3285986d.jpg" },
  { name: "Final Destination", img: "https://4kwallpapers.com/images/wallpapers/final-destination-1242x2208-22234.jpg" },
  { name: "Parallel", img: "https://m.media-amazon.com/images/M/MV5BZDc0MWQ4YjgtMjIwMy00MDY1LWEyZTMtMTk5ZWRlMmMwMmM4XkEyXkFqcGc@._V1_.jpg" },
  { name: "Inception", img: "https://w0.peakpx.com/wallpaper/665/394/HD-wallpaper-inception-leonardo-dicrapio-movie.jpg" },
  { name: "The Grand Budapest Hotel", img: "https://i.pinimg.com/474x/bf/5e/a0/bf5ea0be3e0e29ae61a00ba049dda0d0.jpg" },
  { name: "Interstellar", img: "https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg" },
  { name: "Whiplash", img: "https://wallpapercat.com/w/full/9/6/4/65896-1440x2160-iphone-hd-whiplash-wallpaper-photo.jpg" },
  { name: "Jawan", img: "https://wallpapercave.com/wp/wp12803837.jpg" },
  { name: "Arrival", img: "https://w0.peakpx.com/wallpaper/148/428/HD-wallpaper-arrival-2016-film-pelicula-space.jpg" },
  { name: "Dune", img: "https://i.pinimg.com/736x/2a/b5/14/2ab51409bf2df8b4b42078cb31ff9e1f.jpg" },
  { name: "The Matrix", img: "https://wallpapercat.com/w/full/6/a/8/135341-2000x3000-mobile-hd-matrix-movie-background-photo.jpg" },
  { name: "PK", img: "https://i.pinimg.com/736x/f8/b2/c4/f8b2c434ccea75a8e018bc882152040d.jpg" },
  { name: "Her", img: "https://i.pinimg.com/736x/81/f7/4b/81f74bab5085b61701048aa17788decc.jpg" },
  { name: "Tenet", img: "https://i.redd.it/dmcev64j7l851.jpg" }
];


const Explore = () => {
  const [query, setQuery] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const searchTrailer = async (movieName) => {
    try {
      setQuery(movieName);
      const res = await axios.get(`http://localhost:5000/api/trailer?q=${movieName}`);
      setTrailerUrl(res.data.trailerUrl);
      setShowModal(true);
    } catch (err) {
      alert("Trailer Not Found");
      setTrailerUrl("");
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTrailerUrl("");
  };

  return (
    <>
      <motion.div id='explore' className="flex flex-col p-4 sm:p-6 md:p-10 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 xl:gap-20 justify-items-center">
          {list.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/30 shadow-md rounded-lg overflow-hidden w-full sm:w-[220px] md:w-[250px] h-[400px]"
            >
              <img
                src={movie.img}
                alt={movie.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="flex-1 flex items-center justify-center w-full">
                <button
                  onClick={() => searchTrailer(movie.name)}
                  className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-yellow-300 hover:text-black"
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>


      <AnimatePresence>
        {showModal && trailerUrl && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/30 rounded-lg p-4 sm:p-6 shadow-lg relative w-full max-w-3xl mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              drag
            >
              <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-md">
                <iframe
                  src={trailerUrl}
                  title={query + " Trailer"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                ></iframe>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-xl text-black hover:text-red-500 font-extrabold"
              >
                ✕
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Explore;
