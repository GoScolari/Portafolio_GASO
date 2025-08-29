import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Información principal */}
          <div className="md:col-span-2">
            <h3 className={`text-xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Gonzalo Scolari
            </h3>
            <p className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Full Stack Developer especializado en crear experiencias web modernas 
              y funcionales. Transformando ideas en soluciones digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:gonzalo@ejemplo.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="https://linkedin.com/in/gonzalo-scolari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://github.com/gonzaloscolari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                💻
              </a>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                📱
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {['work', 'about', 'output', 'contact'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className={`text-sm transition-colors hover:text-blue-500 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Servicios
            </h4>
            <ul className="space-y-2">
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Landing Pages
              </li>
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Aplicaciones Web
              </li>
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                E-commerce
              </li>
              <li className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                APIs & Backend
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className={`border-t pt-8 ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm mb-4 md:mb-0 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} Gonzalo Scolari. Todos los derechos reservados.
            </p>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Hecho con ❤️ y ⚡ React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;