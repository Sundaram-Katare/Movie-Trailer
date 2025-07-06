import { motion } from 'framer-motion';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiPeerlist } from 'react-icons/si';

const Contact = () => {
  return (
    <motion.div
      className="flex flex-col items-center py-10 px-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-white mb-4">Connect With Me</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <a href="https://github.com/Sundaram-Katare"><FaGithubSquare className="text-white hover:text-gray-400 text-4xl cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/sundaram-katare5/"><FaLinkedin className="text-white hover:text-blue-400 text-4xl cursor-pointer" /></a>
        <a href="https://peerlist.io/sundaram_katare/posts"><SiPeerlist className="text-white hover:text-green-400 text-4xl cursor-pointer" /></a>
        <a href="https://x.com/sundaramkatare"><FaSquareXTwitter className="text-white hover:text-orange-200 text-4xl cursor-pointer" /></a>
      </div>
    </motion.div>
  );
};

export default Contact;
