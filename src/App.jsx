import { ThemeProvider } from "./context/ThemeContext";
import ParticleField from "./components/ParticleField";
import CursorFollower from "./components/CursorFollower";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        <CursorFollower />
        {/* Particle Effect Background */}
        <ParticleField />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Capabilities />
          <Work />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
