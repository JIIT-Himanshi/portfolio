import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import personPng from "../assets/image-removebg-preview.png";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 170]);
  const personY = useTransform(scrollY, [0, 800], [0, -110]);
  const contentY = useTransform(scrollY, [0, 800], [0, -45]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-end relative overflow-hidden pt-28"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-x-0 bottom-12 z-[1] pointer-events-none select-none"
      >
        <p className="hero-back-text font-display text-[4.2rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] font-extrabold uppercase tracking-[-0.06em] text-light-text/10 dark:text-dark-text/10 whitespace-nowrap leading-none text-center">
          HIMANSHI
        </p>
      </motion.div>

      <motion.div
        style={{ y: personY }}
        className="absolute inset-x-0 bottom-0 z-[3] pointer-events-none"
      >
        <img
          src={personPng}
          alt="Himanshi Chauhan"
          className="w-[21rem] sm:w-[25rem] md:w-[31rem] lg:w-[35rem] mx-auto drop-shadow-[0_24px_42px_rgba(34,34,34,0.2)]"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="max-w-7xl mx-auto w-full px-6 text-left z-10 pb-20 sm:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center mb-7"
        >
          <div className="glass-card inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-light-text dark:bg-dark-text rounded-full animate-pulse"></span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
              Open to Internships
            </span>
          </div>
        </motion.div>

        <div ref={titleRef} className="overflow-hidden mb-4">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.3rem] font-extrabold text-light-text dark:text-dark-text leading-[0.98] display-tight max-w-4xl">
            <span className="hero-word inline-block">Frontend Developer </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="overflow-hidden mb-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-light-text-secondary dark:text-dark-text-secondary font-medium"
          >
            Hi, I'm Himanshi Chauhan
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-light-text-secondary dark:text-dark-text-secondary text-sm sm:text-base md:text-lg max-w-xl"
        >
          I design and build modern, responsive web interfaces with a strong
          focus on clean UI and smooth user experience. Currently exploring
          full-stack development and looking for opportunities to work on
          real-world projects.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          <motion.a
            variants={itemVariants}
            href="#work"
            className="group pill-button flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-light-text dark:text-dark-text font-semibold text-sm sm:text-base hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-light-text dark:border-dark-text bg-light-text text-white dark:bg-dark-text dark:text-dark-bg rounded-full font-semibold text-sm sm:text-base hover:translate-y-[-1px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-7 sm:right-10 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}