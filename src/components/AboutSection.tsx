import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'Frontend', technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'], level: 95 },
    { name: 'Backend', technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase'], level: 90 },
    { name: 'DevOps', technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Netlify'], level: 85 },
    { name: 'Design', technologies: ['Figma', 'Adobe XD', 'Framer', 'Photoshop', 'Illustrator'], level: 80 }
  ];

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900/50 to-black/30' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-light mb-6 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Información personal */}
          <div>
            <div className={`p-8 rounded-2xl backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/80 border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Full Stack Developer
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Soy un desarrollador apasionado por crear soluciones web innovadoras que 
                combinan funcionalidad excepcional con diseños atractivos. Con más de 3 años 
                de experiencia, me especializo en tecnologías modernas como React, TypeScript y Node.js.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Mi enfoque está en desarrollar aplicaciones escalables, mantenibles y con 
                excelente experiencia de usuario. Desde landing pages hasta aplicaciones 
                empresariales complejas, disfruto cada desafío técnico.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proyectos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">3+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Años Exp.
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">25+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Clientes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Tecnologías & Skills
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}>
                      {skill.name}
                    </h4>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Barra de progreso */}
                  <div className={`h-2 rounded-full mb-3 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105 ${
                          isDarkMode 
                            ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;