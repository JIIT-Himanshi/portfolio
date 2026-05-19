import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      e.target.reset();
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

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

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/JIIT-Himanshi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      primary: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/himanshi-jiit/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/himanshi_builds",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/himanshi_151/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-24 px-6 bg-light-surface/40 dark:bg-dark-surface/25 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 g:gap-16"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-text" />
                <span className="text-xs sm:text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.18em]">
                  Contact
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-5 leading-tight display-tight">
                Let's start a project together
              </h2>

              <p className="text-light-text-secondary dark:text-dark-text-secondary text-base mb-8">
                I'm currently available for freelance projects and internships.
                Feel free to reach out.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="mailto:himanshichauhan2006@gmail.com"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full border border-light-border/45 dark:border-dark-border/45 flex items-center justify-center group-hover:bg-light-surface dark:group-hover:bg-dark-surface/40 transition-colors">
                    <svg
                      className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text dark:group-hover:text-dark-text transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-light-text dark:text-dark-text group-hover:translate-x-0.5 transition-all">
                    himanshichauhan2006@gmail.com
                  </span>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full border border-light-border/45 dark:border-dark-border/45 flex items-center justify-center group-hover:bg-light-surface dark:group-hover:bg-dark-surface/40 transition-colors">
                    <svg
                      className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text dark:group-hover:text-dark-text transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-light-text dark:text-dark-text group-hover:translate-x-0.5 transition-all">
                    +91 8527146640
                  </span>
                </motion.div>

              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                      social.primary
                        ? "bg-light-text dark:bg-dark-text text-white dark:text-dark-bg hover:opacity-90"
                        : "bg-light-surface/70 dark:bg-dark-bg/40 border border-light-border/40 dark:border-dark-border/45 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="./Resume.pdf"
                className="rounded-full inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 border border-light-border/40 dark:border-dark-border/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-[2rem] p-5 sm:p-8 border border-light-border/30 dark:border-dark-border/40"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-light-surface/75 dark:bg-dark-surface/40 border border-light-border/35 dark:border-dark-border/45 rounded-xl text-light-text dark:text-dark-text placeholder:text-light-text-secondary/50 dark:placeholder:text-dark-text-secondary/50 focus:outline-none focus:border-light-text dark:focus:border-dark-text transition-colors text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-light-surface/75 dark:bg-dark-surface/40 border border-light-border/35 dark:border-dark-border/45 rounded-xl text-light-text dark:text-dark-text placeholder:text-light-text-secondary/50 dark:placeholder:text-dark-text-secondary/50 focus:outline-none focus:border-light-text dark:focus:border-dark-text transition-colors text-sm sm:text-base"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-light-surface/75 dark:bg-dark-surface/40 border border-light-border/35 dark:border-dark-border/45 rounded-xl text-light-text dark:text-dark-text placeholder:text-light-text-secondary/50 dark:placeholder:text-dark-text-secondary/50 focus:outline-none focus:border-light-text dark:focus:border-dark-text transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all flex items-center justify-center gap-2 ${
                  formState === "success"
                    ? "bg-light-text dark:bg-dark-text text-white dark:text-dark-bg"
                    : "bg-light-text dark:bg-dark-text text-white dark:text-dark-bg hover:opacity-90"
                } ${formState === "sending" ? "opacity-70" : ""}`}
                whileHover={formState === "idle" ? { scale: 1.01 } : {}}
                whileTap={formState === "idle" ? { scale: 0.99 } : {}}
              >
                {formState === "idle" && "Send Message"}
                {formState === "sending" && (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                )}
                {formState === "success" && (
                  <>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Sent Successfully!
                  </>
                )}
              </motion.button>

              {formState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-light-text-secondary dark:text-dark-text-secondary"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
