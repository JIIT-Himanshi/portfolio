import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Work() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      title: "easyBasket - 10 Mins Delivery",
      description:
        "A full-stack Blinkit-style grocery delivery app with Zustand state management, real-time cart updates, and Supabase backend for auth & database.",
      tags: ["React", "Supabase", "Zustand", "Tailwind"],
      gradient: "from-black/70 to-black/35",
      image: "/projects/easyBasket.jfif",
      link: "https://quick-basket-woad.vercel.app/",
      github: "https://github.com/Himanshu-ABES",
      fitImage: true,
    },
    {
      title: "Apple iPhone 15 Clone",
      description:
        "A modern iPhone 15 inspired website featuring Three.js 3D models, GSAP animations, and stunning visual effects with interactive elements.",
      tags: ["React", "Three.js", "GSAP", "Tailwind"],
      gradient: "from-black/80 to-black/45",
      image: "/projects/apple-clone.jpeg",
      link: "https://app-iphone.netlify.app/",
      github: "https://github.com/Himanshu-ABES",
      fitImage: true,
    },
    {
      title: "K72 Website Clone",
      description:
        "A fully responsive clone of K72.ca featuring smooth GSAP animations, Framer Motion effects, and modern UI/UX design across 3 pages.",
      tags: ["React", "GSAP", "Framer Motion", "Tailwind"],
      gradient: "from-black/80 to-black/35",
      image: "/projects/k72-clone.jpeg",
      link: "https://k27-website-clone-project.vercel.app/",
      github: "https://github.com/Himanshu-ABES",
      fitImage: true,
    },
    {
      title: "Edvyn - Education Platform",
      description:
        "An educational platform website with modern gradient design, GSAP animations, and multiple course pages for practical learning.",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      gradient: "from-black/80 to-black/35",
      image: "/projects/edvyn.jpeg",
      link: "https://himanshu-abes.github.io/Edvyn/",
      github: "https://github.com/Himanshu-ABES",
      fitImage: true,
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-text" />
              <span className="text-xs sm:text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.18em]">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text display-tight">
              Selected Work
            </h2>
          </div>

          <motion.a
            href="https://github.com/Himanshu-ABES?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-light-text dark:text-dark-text hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Repositories
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group block"
              whileHover={{ y: -6 }}
            >
              <div className="glass-card card-hover rounded-[2rem] overflow-hidden border border-light-border/30 dark:border-dark-border/40 transition-all duration-300 h-full">
                {/* Project Preview */}
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Browser mockup frame to keep a premium editorial presentation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-white dark:bg-dark-surface rounded-xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    {/* Browser Bar */}
                    <div className="h-8 bg-light-surface dark:bg-dark-bg border-b border-light-border/35 dark:border-dark-border/40 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-light-text/70 dark:bg-dark-text/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-light-text/40 dark:bg-dark-text/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-light-text/20 dark:bg-dark-text/20" />
                      <div className="flex-1 mx-4">
                        <div className="h-5 bg-light-border/35 dark:bg-dark-border/45 rounded-full w-2/3 mx-auto" />
                      </div>
                    </div>

                    {/* Project Screenshot */}
                    {project.image ? (
                      <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full ${project.fitImage ? "object-contain bg-white dark:bg-dark-surface" : "object-cover object-top"}`}
                        />
                      </div>
                    ) : (
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-1/3" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                          <div className="h-20 bg-light-surface dark:bg-dark-bg rounded" />
                        </div>
                        <div className="h-4 bg-light-surface dark:bg-dark-bg rounded w-2/3" />
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-light-text font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col h-[calc(100%-0px)]">
                  <h3 className="text-xl font-display font-bold text-light-text dark:text-dark-text mb-2 display-tight">
                    {project.title}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-5 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-light-surface/75 dark:bg-dark-surface/40 rounded-full text-xs font-semibold text-light-text-secondary dark:text-dark-text-secondary border border-light-border/35 dark:border-dark-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project actions requested: GitHub + Live */}
                  <div className="flex items-center gap-3 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-light-border/50 dark:border-dark-border/50 text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface/50 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-light-text dark:border-dark-text bg-light-text text-white dark:bg-dark-text dark:text-dark-bg text-xs sm:text-sm font-semibold"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
