import { motion } from 'framer-motion';
import { useState } from 'react';
import MovieGrid from './MovieGrid.jsx';

const Movies = ({ movies }) => {
  const [direction, setDirection] = useState('true');

  return (
    <>
      <motion.div className='flex flex-col items-center justify-center p-5 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100'>
        <motion.h1
          className="font-agu text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-6 mb-4 px-2"
        >
          WATCH BEST HQ TRAILERS AT YOUR FINGERTIPS
        </motion.h1>


        <motion.div className='w-full grid gap-40 '>
          <MovieGrid movies={movies} />
        </motion.div>
      </motion.div>
    </>
  )
};

export default Movies;