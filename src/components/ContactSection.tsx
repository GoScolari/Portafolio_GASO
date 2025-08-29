import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora solo mostramos los datos en console
    console.log('Datos del formulario:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    // Resetear formulario
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-black/30 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-light mb-6 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Let's Work <span className="text-blue-500">Together</span>
          </h2>
          <p className={`text-lg md:text-xl font-light max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y 
            ayudarte a convertirlas en una realidad digital excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Información de contacto */}
          <div>
            <div className={`p-8 rounded-2xl backdrop-blur-sm h-full ${
              isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/80 border border-gray-200'
            }`}>
              
              <h3 className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Información de Contacto
              </h3>

              {/* Métodos de contacto */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:gonzalo@ejemplo.com"
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      gonzalo@ejemplo.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-500 text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      WhatsApp
                    </h4>
                    <a 
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      LinkedIn
                    </h4>
                    <a 
                      href="https://linkedin.com/in/gonzalo-scolari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      /in/gonzalo-scolari
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      GitHub
                    </h4>
                    <a 
                      href="https://github.com/gonzaloscolari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-600 transition-colors"
                    >
                      /gonzaloscolari
                    </a>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="mt-12 pt-8 border-t border-gray-300/20">
                <h4 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Horarios de Respuesta
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Lunes - Viernes: 9:00 AM - 7:00 PM (GMT-3)<br />
                  Tiempo de respuesta promedio: 2-4 horas
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/80 border border-gray-200'
            }`}>
              
              <h3 className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Cotizar Proyecto
              </h3>

              <div className="space-y-6">
                
                {/* Nombre */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Tipo de Proyecto *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-black'
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="landing">Landing Page</option>
                    <option value="webapp">Aplicación Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="dashboard">Dashboard/Admin</option>
                    <option value="api">API/Backend</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500'
                    }`}
                    placeholder="Describe tu proyecto, objetivos, funcionalidades deseadas, presupuesto aproximado, etc."
                  />
                </div>

                {/* Botón submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-xl"
                >
                  Enviar Cotización 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;