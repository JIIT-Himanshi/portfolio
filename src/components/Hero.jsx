import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import personPng from "../assets/hero-portrait.png";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 170]);
  const personY = useTransform(scrollY, [0, 800], [0, -90]);
  const contentY = useTransform(scrollY, [0, 800], [0, -30]);
  const bgYSmooth = useSpring(bgY, { stiffness: 80, damping: 20, mass: 0.6 });
  const personYSmooth = useSpring(personY, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });
  const contentYSmooth = useSpring(contentY, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

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
      className="min-h-screen flex flex-col justify-start relative overflow-hidden pt-28 sm:pt-32"
    >
      <div aria-hidden className="hero-arc hero-arc-top" />
      <div aria-hidden className="hero-arc hero-arc-bottom" />

      <div aria-hidden className="hero-corner-title">
        Frontend Developer
      </div>

      <motion.div
        aria-hidden
        style={{ y: bgYSmooth }}
        className="hero-marquee"
      >
        <div className="hero-marquee-track">
          <span className="hero-marquee-text">Himanshi Chauhan</span>
          <span className="hero-marquee-text" aria-hidden>
            Himanshi Chauhan
          </span>
          <span className="hero-marquee-text" aria-hidden>
            Himanshi Chauhan
          </span>
          <span className="hero-marquee-text" aria-hidden>
            Himanshi Chauhan
          </span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: personYSmooth }}
        className="absolute inset-x-0 -bottom-6 z-[3] pointer-events-none will-change-transform"
      >
        <img
          src={personPng}
          alt="Himanshi Chauhan"
          className="hero-portrait w-[26rem] sm:w-[30rem] md:w-[37rem] lg:w-[43rem] xl:w-[47rem] mx-auto drop-shadow-[0_30px_60px_rgba(34,34,34,0.24)]"
        />
      </motion.div>

      <motion.div
        style={{ y: contentYSmooth }}
        className="hero-cta"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center"
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