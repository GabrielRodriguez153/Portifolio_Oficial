import { useState } from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const navItems = ["Início", "Sobre", "Skills", "Projetos", "Contato"];

  return (
    <header className="fixed w-full glass-effect z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Byte<span className="text-orange-500">Brew</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/GabrielRodriguez153"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center gap-2"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <button
            onClick={() => setMobileHeaderOpen(!mobileHeaderOpen)}
            className="md:hidden text-white"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      <MobileHeader
        isOpen={mobileHeaderOpen}
        onClose={() => setMobileHeaderOpen(false)}
        items={navItems}
      />
    </header>
  );
};

export default Header;
