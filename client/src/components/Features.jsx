import { motion } from "framer-motion";
import { features } from "../assets/Movies";

const Features = () => {
    return (
        <motion.div className="flex flex-col items-center justify-center min-h-screen text-white bg-white p-4 sm:p-6 md:p-8">
            <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-6 text-black"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: -50}}
                viewport={{ once: false }}
            >
                Services
            </motion.h1>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl px-4 sm:px-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: -50}}
                viewport={{ once: false }}
                        className="bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 text-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                    >
                        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                            <span className="text-5xl sm:text-6xl mb-2 sm:mb-0">{feature.icon}</span>
                            <h2 className="text-xl sm:text-2xl font-semibold">{feature.featureName}</h2>
                        </div>
                        <p className="mt-3 text-sm sm:text-base">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Features;
