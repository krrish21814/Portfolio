"use client"
import { Card } from "./Card";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";

export const About = () => {
  const skills = ['Next.js', 'JavaScript', 'TypeScript', 'Prisma', 'Node.js', 'React', 'SQL', 'Tailwind CSS'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: i => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden "
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
      }}>
      <motion.div
        className="text-[8rem] font-bold text-white/80 pt-16 ml-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}>
        About
      </motion.div>

      <motion.div
        className="flex justify-center -mt-20"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}>
        <Card w="w-[65rem]" h="h-[30rem]">
          <div className="flex items-center h-full">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 ml-7 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>

              <div className="md:col-span-2 space-y-6">
                <motion.div variants={itemVariants}>
                  <motion.h1
                    className="text-4xl font-bold text-white mb-6"
                    variants={itemVariants}>
                    Krishna Gad
                  </motion.h1>
                  <motion.p
                    className="text-lg leading-relaxed text-gray-300"
                    variants={itemVariants}>
                    I'm a passionate software developer focused on building scalable web applications. Always eager to learn new tools and techniques, I strive to write clean, efficient code and continuously improve my skills. I thrive on challenges, pushing myself to grow through hands-on projects and new concepts. Committed to delivering high-quality solutions, I aim to contribute to innovative projects and collaborate with like-minded professionals.
                  </motion.p>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <motion.h2
                    className="text-2xl font-semibold text-white mb-4"
                    variants={itemVariants}>
                    Skills
                  </motion.h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        custom={index}
                        variants={skillVariants}
                        className="bg-zinc-700 text-gray-200 px-3 py-1.5 rounded-lg 
                        text-sm font-medium hover:bg-zinc-800 hover:text-white transition-transform duration-300 
                        transform hover:scale-110">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.h2
                    className="text-2xl font-semibold text-white mb-4"
                    variants={itemVariants} >
                    Connect
                  </motion.h2>
                  <div className="flex gap-4">
                    {[
                      { Icon: FaGithub, url: 'https://github.com/krrish21814', label: 'GitHub' },
                      { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/krishna-gad-278150296/', label: 'LinkedIn' },
                      { Icon: FaInstagram, url: 'https://www.instagram.com/krrishh.11', label: 'Instagram' },
                      { Icon: BsTwitterX, url: 'https://x.com/krrishcodes', label: 'Twitter' },
                    ].map(({ Icon, url, label }, index) => (
                      <motion.a
                        key={label}
                        custom={index}
                        variants={socialVariants}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
                        aria-label={label}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}>
                        <Icon />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;