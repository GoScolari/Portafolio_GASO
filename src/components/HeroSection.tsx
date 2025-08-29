import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="work" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fondo con gradiente animado */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`} />
      
      {/* Círculos flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-bounce ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} style={{ animationDuration: '3s' }} />
        <div className={`absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 animate-spin ${
          isDarkMode ? 'bg-green-500' : 'bg-green-300'
        }`} style={{ animationDuration: '20s' }} />
      </div>

      {/* Grid pattern de fondo */}
      <div className={`absolute inset-0 opacity-5 ${
        isDarkMode ? 'bg-white' : 'bg-black'
      }`} style={{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        
        {/* Título principal con efecto gradiente */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light mb-4 leading-tight">
            <span className={`block transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Full Stack
            </span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Developer
            </span>
          </h1>
        </div>

        {/* Descripción con animación de aparición */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className={`text-xl md:text-2xl font-light leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Creando <span className="text-blue-500 font-medium">experiencias web modernas</span> con<br />
            React, TypeScript y las mejores tecnologías
          </p>
        </div>

        {/* Skills badges flotantes */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js'].map((skill, index) => (
            <span 
              key={skill}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-400 shadow-sm'
              }`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Botones de acción con efectos hover */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <a 
            href="#contact" 
            className="group relative bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Cotizar Proyecto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#output" 
            className={`group relative border px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg ${
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:bg-gray-800/50' 
                : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            Ver Portfolio
            <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`} />
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;