import { useTheme } from '../contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, color, technologies }) => {
  const { isDarkMode } = useTheme();

  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/20 text-blue-500',
    green: 'from-green-500/20 to-green-600/20 border-green-500/20 text-green-500',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/20 text-purple-500',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/20 text-orange-500'
  };

  const gradientClass = colorClasses[color];

  return (
    <div className={`group relative p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
      isDarkMode ? 'bg-gray-900/80 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'
    } backdrop-blur-sm hover:shadow-2xl`}>
      
      {/* Efecto de brillo al hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradientClass.split(' ')[0]} ${gradientClass.split(' ')[1]}`} />
      
      {/* Contenido */}
      <div className="relative z-10">
        
        {/* Imagen/Demo del proyecto */}
        <div className={`h-48 rounded-lg mb-6 flex items-center justify-center transition-all duration-300 bg-gradient-to-br ${gradientClass} group-hover:scale-105 overflow-hidden`}>
          
          {/* Grid pattern de fondo */}
          <div className={`absolute inset-0 opacity-10 ${isDarkMode ? 'bg-white' : 'bg-black'}`} style={{
            backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(180deg, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
          
          {/* Icono/Logo del proyecto */}
          <div className={`relative z-10 text-center ${gradientClass.split(' ')[2]}`}>
            <div className="text-4xl mb-2">💻</div>
            <span className="text-sm font-medium">Live Demo</span>
          </div>

          {/* Efecto de partículas flotantes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full animate-ping ${gradientClass.split(' ')[2].replace('text-', 'bg-')}`} />
            <div className={`absolute bottom-6 left-6 w-1 h-1 rounded-full animate-pulse ${gradientClass.split(' ')[2].replace('text-', 'bg-')}`} />
          </div>
        </div>

        {/* Título del proyecto */}
        <h3 className={`text-xl font-semibold mb-3 transition-colors group-hover:${gradientClass.split(' ')[2]} ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          {title}
        </h3>

        {/* Descripción */}
        <p className={`text-sm mb-6 leading-relaxed ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* Tecnologías usadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-gray-600' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200 group-hover:border-gray-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
          } group-hover:scale-105`}>
            Ver Demo
          </button>
          <button className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 border group-hover:scale-105 ${gradientClass.split(' ')[2]} hover:bg-opacity-10 hover:${gradientClass.split(' ')[2].replace('text-', 'bg-')}`} style={{
            borderColor: gradientClass.includes('blue') ? '#3b82f6' : 
                        gradientClass.includes('green') ? '#10b981' : 
                        gradientClass.includes('purple') ? '#8b5cf6' : '#f97316'
          }}>
            GitHub
          </button>
        </div>
      </div>

      {/* Efecto de borde brillante */}
      <div className={`absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradientClass.split(' ')[1].replace('/20', '/40')}`} />
    </div>
  );
};

export default ProjectCard;