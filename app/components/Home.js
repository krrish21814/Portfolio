"use client"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Card } from "./Card";
import { motion } from "framer-motion";

export const Home = () => {
  const skillsAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillItemAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div
      className="min-h-screen  overflow-x-hidden relative flex justify-center items-center"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
      }}>
      <div className="grid w-[85rem] h-[35rem]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-[8rem] font-bold text-white/80 ml-8">Software</h1>
          <h3 className="pl-8 -mt-6 w-80">
            Passionate about building web solutions and constantly learning new technologies
          </h3>
        </motion.div>

        <div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}>
            <div className="flex justify-end -mb-14">
              <h3 className="-mr-14 w-80">
                Driven by curiosity, always learning and improving to create seamless web experiences
              </h3>
            </div>
            <h1 className="flex justify-end text-[8rem] font-bold text-white/80">
              Developer
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="absolute">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}>
          <Card w="w-[30rem]" h="h-[40rem]">
            <div className="flex flex-col items-center">
              <motion.div 
                className="relative group mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}>
                <motion.div 
                  className="absolute -inset-1 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}></motion.div>
                <motion.div 
                  className="w-52 h-52 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <img
                    src="images/finalBitmoji.png"
                    alt="Profile"
                    className="w-full h-full object-cover"/>
                </motion.div>
              </motion.div>

              <motion.div
                className="text-4xl font-bold text-center bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}>
                Krishna Gad
              </motion.div>

              <motion.div
                className="text-center text-white/80 mt-4 text-lg max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}>
                Passionate developer with a focus on creating seamless user experiences. 
                Always eager to learn and build something new with the latest technologies.
              </motion.div>

              <motion.div 
                className="space-y-4 w-full mt-8"
                variants={skillsAnimation}
                initial="hidden"
                animate="show">
                <motion.div 
                  className="text-lg font-medium text-center text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}>
                  Skills
                </motion.div>
                <motion.div 
                  className="flex flex-wrap justify-center gap-3"
                  variants={skillsAnimation}>
                  {[
                    'Next.js',
                    'JavaScript',
                    'TypeScript',
                    'Prisma',
                    'Node.js',
                    'React',
                    'SQL',
                    'Tailwind CSS',
                  ].map((skill) => (
                    <motion.div
                      key={skill}
                      variants={skillItemAnimation}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="px-4 py-1.5 rounded-full text-sm
                               bg-white/5 backdrop-blur-sm
                               border border-white/10
                               hover:bg-white/10 hover:border-white/20
                               hover:shadow-lg
                               transition-all hover:text-white duration-300
                               cursor-pointer">
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-8 mt-8"
                variants={socialAnimation}
                initial="hidden"
                animate="show">
                {[
                  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/krishna-gad-278150296/', hoverColor: 'hover:text-blue-400' },
                  { icon: <FaGithub />, href: 'https://github.com/krrish21814', hoverColor: 'hover:text-white' },
                  { icon: <BsTwitterX />, href: 'https://x.com/krrishcodes', hoverColor: 'hover:text-blue-400' },
                  { icon: <FaInstagram />, href: 'https://www.instagram.com/krrishh.11', hoverColor: 'hover:text-pink-400' },
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-300 text-white/70 ${social.hoverColor}`}
                    variants={skillItemAnimation}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 400 }
                    }}>
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}