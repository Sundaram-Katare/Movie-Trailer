import React from 'react';
import NavBar from './NavBar.jsx';

const LandingPage = () => {
    return (
        <>
        <div className="bg-image bg-cover bg-center min-h-screen mb-0">
         <NavBar />
        <div className='flex flex-col items-center justify-center h-screen text-white mb-0'>
           <h1 className='text-center mb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-purple-200 to-red-400 text-7xl'>Watch Movie <br /> Previews 🎥</h1>
           <p className='text-center text-2xl font-semibold text-white mt-4'>Discover and Watch Trailers Instantly.<br /> Search your favorite movies and get their official trailers in one click.</p>
           <div className='mt-8 flex gap-4'>
            <button className='px-2 py-3 text-2xl font-semibold text-black border rounded-lg bg-yellow-500 hover:bg-red-400'>Search Movies</button>
            <button className='px-2 py-3 text-2xl font-semibold text-black border rounded-lg bg-white hover:bg-orange-400'>Browse Movies</button>
           </div>
        </div>
        </div>
        </>
    )
};

export default LandingPage;