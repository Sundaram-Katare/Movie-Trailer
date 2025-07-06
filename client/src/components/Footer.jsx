import Contact from "./Conatct.jsx";
import Review from "./Review.jsx";

const Footer = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-black">
           <Review />
           <Contact />
        </div>
        </>
    )
};

export default Footer;