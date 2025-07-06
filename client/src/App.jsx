import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import './App.css';
import Movies from './components/movies.jsx';
import { MoviesData } from './assets/Movies.js';
import Features from './components/Features.jsx';
import Upload from './components/Upload.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Explore from './components/Explore.jsx';

function App() {
  return (
    <>
      <div className="bg-image bg-cover bg-center min-h-screen mb-0">
        <NavBar />
        
        {/* Hero Heading Section */}
        <div className='flex flex-col items-center justify-center text-white px-4 py-10 h-full'>
          <h1 className='text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-purple-200 to-red-400 
                         text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-10 leading-tight'>
            Watch Movie <br className="hidden sm:block" /> Previews 🎥
          </h1>
          
          <p className='text-center text-base sm:text-lg md:text-2xl font-semibold mt-2 max-w-3xl'>
            Discover and Watch Trailers Instantly.
            <br className="hidden sm:block" /> Search your favorite movies and get their official trailers in one click.
          </p>
          
          <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
            <a href="#search">
              <button className='px-4 py-3 text-lg sm:text-xl font-semibold text-black border rounded-lg bg-yellow-500 hover:bg-red-400 w-full sm:w-auto'>
                Search Movies
              </button>
            </a>
            <a href='#explore'>
              <button className='px-4 py-3 text-lg sm:text-xl font-semibold text-black border rounded-lg bg-white hover:bg-orange-400 w-full sm:w-auto'>
                Browse Movies
              </button>
            </a>
          </div>
        </div>

        {/* Other Sections */}
        <Hero />
        <Upload />
        <Movies movies={MoviesData} />
        <Explore />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
