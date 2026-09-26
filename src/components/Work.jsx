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
      title: "Foodex India Redesign",
      description:
        "Modern FMCG website redesign with product discovery, responsive UI and smooth interactions.",
      tags: ["React", "Vite", "Tailwind", "GSAP"],
      gradient: "from-black/70 to-black/35",
      image: "/projects/foodex-redesign.png",
      link: "https://foodex-redesign.vercel.app/",
      github: "https://github.com/JIIT-Himanshi/foodex-redesign",
      fitImage: true,
    },
    {
      title: "APERTURE - Visual Studio",
      description:
        "Cinematic photography experience with editorial design, immersive motion and visual storytelling.",
      tags: ["React", "Tailwind", "Framer Motion", "Vite"],
      gradient: "from-black/80 to-black/45",
      image: "/projects/aperture-studio.png",
      link: "https://aperture-visuals.vercel.app/",
      github: "https://github.com/JIIT-Himanshi/aperture-studio",
      fitImage: true,
    },
    {
      title: "NEET Examination Analysis",
      description:
        "Interactive analytics dashboard exploring NEET examination trends and insights across India.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit"],
      gradient: "from-black/80 to-black/35",
      image: "/projects/neet-analysis.png",
      link: "https://neet-analysis-dashboard.streamlit.app/",
      github:
        "https://github.com/JIIT-Himanshi/neet-examination-analysis-india",
      fitImage: true,
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive developer portfolio with glassmorphism, parallax effects and smooth motion.",
      tags: ["React", "Tailwind", "GSAP", "Framer Motion"],
      gradient: "from-black/80 to-black/35",
      image: "/projects/personal-portfolio.png",
      link: "https://portfolio-eight-swart-67.vercel.app/",
      github: "https://github.com/JIIT-Himanshi/portfolio",
      fitImage: true,
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 md:py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-text" />
            <span className="text-xs sm:text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.18em]">
              Portfolio
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text display-tight">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  {/* Browser mockup frame */}
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
                          className="w-full h-full object-cover object-top"
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
                <div className="p-5 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-light-text dark:text-dark-text mb-2 display-tight">
                    {project.title}
                  </h3>

                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
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

                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}