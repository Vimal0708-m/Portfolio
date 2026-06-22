import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed right-6 sm:right-8 bottom-8 sm:bottom-12 z-50 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
          initial={{ opacity: 0, scale: 0, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp size={20} className="sm:scale-100 scale-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
