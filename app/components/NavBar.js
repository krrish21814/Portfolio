"use client"
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

export const Navbar = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="fixed top-0 w-full backdrop-blur-sm bg-black/10 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}>
            <div className="mx-auto px-16">
                <div className="flex items-center justify-between h-16">
                    <motion.button
                        onClick={() => handleScroll('home')}
                        className="text-white font-medium hover:scale-105 transition-all duration-300 text-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        Krishna Gad
                    </motion.button>

                    <motion.div
                        className="flex items-center space-x-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        {[
                            { label: 'About', id: 'about' },
                            { label: 'Projects', id: 'projects' },
                        ].map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className="text-white/70 hover:text-white transition-colors duration-300
                                    relative after:content-[''] after:absolute
                                    after:w-0 after:h-px after:bg-white
                                    after:left-0 after:-bottom-1 hover:after:w-full
                                    after:transition-all after:duration-300
                                    text-lg font-medium"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}>
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
