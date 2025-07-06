import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
    const [video, setVideo] = useState("https://youtu.be/dKWWGdBbGKk?si=gNB-esOWoaSUN_J5");

    const getEmbedUrl = (url) => {
        if (url.includes("youtu.be")) {
            const videoId = url.split("/").pop().split("?")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
        }
        return url;
    };

    return (
        <motion.div className="relative invisible w-full h-none overflow-hidden bg-black lg:min-h-screen sm:visible sm:h-full">

            <iframe
                src={getEmbedUrl(video)}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                title="YouTube video player"
                frameBorder="0"
            ></iframe>

            <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-black/100 to-black/20 flex flex-col ">
                <h1 className="text-white text-2xl font-bold mt-24 ml-14 md:text-4xl">Explore & Search Movies</h1>
                <p className=' text-3xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900 mt-24 ml-14 md:text-5xl'>Watch And Save Your Favourite <br />Series Preview</p>

            </div>

        </motion.div>
    );
};

export default Hero;