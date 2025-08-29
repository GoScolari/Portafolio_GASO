import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
      aria-label="Cambiar tema"
    >
      <div className="relative w-6 h-6">
        {/* Esfera partida */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className="transform transition-transform duration-500"
          style={{ 
            transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)' 
          }}
        >
          {/* Círculo base */}
          <circle
            cx="12"
            cy="12"
            r="10"
            className={`transition-colors duration-300 ${
              isDarkMode ? 'fill-gray-600' : 'fill-gray-300'
            }`}
            stroke="currentColor"
            strokeWidth="1"
          />
          
          {/* Mitad izquierda (oscura) */}
          <path
            d="M 2 12 A 10 10 0 0 1 12 2 L 12 22 A 10 10 0 0 1 2 12"
            className={`transition-colors duration-300 ${
              isDarkMode ? 'fill-gray-900' : 'fill-gray-800'
            }`}
          />
          
          {/* Mitad derecha (clara) */}
          <path
            d="M 12 2 A 10 10 0 0 1 22 12 A 10 10 0 0 1 12 22 L 12 2"
            className={`transition-colors duration-300 ${
              isDarkMode ? 'fill-yellow-200' : 'fill-white'
            }`}
          />
          
          {/* Línea divisoria */}
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            className={`transition-colors duration-300 ${
              isDarkMode ? 'stroke-gray-500' : 'stroke-gray-400'
            }`}
            strokeWidth="1"
          />
          
          {/* Pequeño punto central */}
          <circle
            cx="12"
            cy="12"
            r="1.5"
            className={`transition-colors duration-300 ${
              isDarkMode ? 'fill-yellow-400' : 'fill-gray-600'
            }`}
          />
        </svg>
        
        {/* Indicador de estado (opcional) */}
        <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-yellow-400' : 'bg-gray-600'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;