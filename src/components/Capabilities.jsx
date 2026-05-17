import { useRef } from "react"; 
import { motion, useInView } from "framer-motion";

export default function Capabilities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const capabilities = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Frontend Development",
      description:
        "Responsive, clean interfaces built with React, Next.js, and Tailwind CSS.",
      link: "https://github.com/",
      linkText: "View My Work",
      gradient: "from-black/5 to-black/0",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Problem Solving",
      description:
        "Structured problem solving with clean, efficient, and readable code.",
      link: "#",
      linkText: "Explore More",
      gradient: "from-black/10 to-black/0",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI & Interaction Design",
      description:
        "Polished UI with refined motion using Tailwind CSS and GSAP.",
      link: "#",
      linkText: "View Designs",
      gradient: "from-black/5 to-black/0",
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-20 md:py-24 px-6 bg-light-surface/40 dark:bg-dark-surface/25 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-text" />
            <span className="text-xs sm:text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.18em]">
              Capabilities
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text display-tight">
            What I Do
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              className="group glass-card rounded-[2rem] p-6 border border-light-border/30 dark:border-dark-border/40 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              whileHover={{ y: -6 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-light-surface/75 dark:bg-dark-surface/40 border border-light-border/35 dark:border-dark-border/45 flex items-center justify-center mb-6 text-light-text dark:text-dark-text group-hover:scale-105 transition-all duration-300">
                  {capability.icon}
                </div>

                <h3 className="text-2xl font-display font-bold text-light-text dark:text-dark-text mb-4">
                  {capability.title}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6 flex-grow">
                  {capability.description}
                </p>

                <motion.a
                  href={capability.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-light-text dark:text-dark-text hover:translate-x-1 transition-all"
                  whileHover={{ x: 4 }}
                >
                  {capability.linkText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}