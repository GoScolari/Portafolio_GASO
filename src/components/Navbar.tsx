import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#output', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black/90 backdrop-blur-sm border-gray-800' 
        : 'bg-white/90 backdrop-blur-sm border-gray-200'
    } border-b`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo/Nombre */}
        <div className={`text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Gonzalo Scolari
        </div>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition-colors hover:text-blue-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Botón de tema desktop */}
          <ThemeToggle />
        </div>

        {/* Controles móvil */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          
          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-800 text-white' 
                : 'hover:bg-gray-100 text-black'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              } ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
              <div className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
              <div className={`h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              } ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 py-4 px-6 rounded-lg transition-all duration-300 animate-slide-down ${
          isDarkMode ? 'bg-gray-900/95 border border-gray-700' : 'bg-white/95 border border-gray-200'
        }`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-2 px-4 rounded-lg transition-colors hover:text-blue-500 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Botón de contacto destacado en móvil */}
            <a 
              href="#contact"
              onClick={closeMenu}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-center transition-colors font-medium"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;