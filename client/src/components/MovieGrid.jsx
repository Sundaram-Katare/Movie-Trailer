import { motion } from "framer-motion";

const MovieGrid  = ({ movies }) => {
  const movieArray = Object.entries(movies);

  // Duplicate the array to fake infinite scrolling
  const repeatedMovies = [...movieArray, ...movieArray];

  return (
    <div className=" overflow-hidden bg-black py-10">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }} // Move left
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedMovies.map(([key, { title, thumbnail }], index) => (
          <motion.div
            key={key + index}
            className="min-w-[200px] flex-shrink-0 flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-48 h-72 object-cover rounded-lg shadow-lg border-2 border-white hover:bg-shadow-lg transition-all duration-300 hover:shadow-yellow-500"
            />
            <p className="text-white mt-2 text-center text-sm font-semibold">{title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default MovieGrid;
