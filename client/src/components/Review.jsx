import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
    const [stars, setStars] = useState(0);

    return (
        <div className="flex flex-col justify-center p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Rate This Project</h1>

            <div className="flex flex-col gap-4 w-full max-w-md">
                <label className="text-base font-semibold">Feedback</label>

                <div className="flex justify-start flex-wrap gap-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            size={45}
                            fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
                            className="cursor-pointer transition-transform hover:scale-110"
                            onClick={() => setStars(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
