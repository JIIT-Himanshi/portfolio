import { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import avatar from "../assets/profile.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "capabilities", "work", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#capabilities" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
      >
        <div
          className={`max-w-7xl mx-auto h-16 lg:h-[4.75rem] rounded-[1.6rem] glass-card transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_14px_42px_rgba(34,34,34,0.14)]"
              : "shadow-[0_10px_30px_rgba(34,34,34,0.08)]"
          }`}
        >
          <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <img
                  src={avatar}
                  alt="Himanshi Chauhan"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div className="absolute -top-0.5 -left-0.5 w-10 h-10 border border-light-border/40 dark:border-dark-border/50 rounded-xl group-hover:border-light-text/70 dark:group-hover:border-dark-text/70 transition-colors" />
              </div>
              <span className="font-display font-semibold text-base sm:text-lg text-light-text dark:text-dark-text tracking-tight">
                Himanshi Chauhan
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <div key={item.name} className="flex items-center gap-2 xl:gap-3">
                    <motion.a
                      href={item.href}
                      className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide uppercase ${
                        isActive
                          ? "text-light-text dark:text-dark-text"
                          : "text-light-text-secondary/90 dark:text-dark-text-secondary/90 hover:text-light-text dark:hover:text-dark-text"
                      }`}
                      whileHover={{ y: -1 }}
                    >
                      {item.name}
                    </motion.a>
                    {index < navItems.length - 1 && (
                      <span className="text-light-text-secondary/70 dark:text-dark-text-secondary/70 text-sm">
                        /
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-light-border/40 dark:border-dark-border/50 text-light-text dark:text-dark-text hover:bg-light-surface/80 dark:hover:bg-dark-surface/40 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5 text-dark-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-light-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>

              {/* Download Button */}
              <motion.a
                href="./Resume.pdf"
                className="hidden md:flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 text-sm font-semibold uppercase tracking-wide rounded-full border border-light-text dark:border-dark-text text-light-text dark:text-dark-text bg-light-surface/80 dark:bg-dark-surface/30 hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
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

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden w-10 h-10 rounded-full border border-light-border/40 dark:border-dark-border/50 text-light-text dark:text-dark-text"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[5.5rem] left-4 right-4 z-40 glass-card rounded-3xl border border-light-border/40 dark:border-dark-border/50 lg:hidden"
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-light-text dark:text-dark-text rounded-2xl hover:bg-light-surface/80 dark:hover:bg-dark-surface/40 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="./Resume.pdf"
                className="block px-4 py-3 mt-3 text-center border border-light-text dark:border-dark-text text-light-text dark:text-dark-text rounded-full font-semibold"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}