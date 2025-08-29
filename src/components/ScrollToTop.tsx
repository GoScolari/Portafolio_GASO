import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ScrollToTop = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar el botón basado en scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para hacer scroll al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-fade-in ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600' 
          : 'bg-white hover:bg-gray-50 text-black border border-gray-200'
      }`}
      aria-label="Scroll to top"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="transform transition-transform hover:-translate-y-1"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;