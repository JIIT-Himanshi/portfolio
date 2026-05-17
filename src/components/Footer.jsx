import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[2rem] p-6 border border-light-border/30 dark:border-dark-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display font-bold text-lg text-light-text dark:text-dark-text tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Himanshi Chauhan
          </motion.a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-[0.08em]">
            <a
              href="#about"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Skills
            </a>
            <a
              href="#work"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
            © {currentYear} Himanshi Chauhan. All rights reserved.
          </p>
        </div>

        </div>
      </div>
    </footer>
  );
}