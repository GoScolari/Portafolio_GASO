import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useTheme } from './contexts/ThemeContext';

function App() {
  // Usar el contexto del tema
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <main className="pt-24">
        {/* Sección WORK - Portfolio/Proyectos */}
        <HeroSection />

        {/* Sección ABOUT - Sobre mí */}
        <AboutSection />

        {/* Sección OUTPUT - Proyectos/Trabajos */}
        {/* Sección OUTPUT - Proyectos/Trabajos */}
        <section
          id="output"
          className={`min-h-screen flex items-center justify-center py-20 ${
            isDarkMode ? "bg-gray-800/30" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Título de la sección */}
            <div className="text-center mb-16">
              <h2
                className={`text-5xl md:text-6xl font-light mb-6 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Featured <span className="text-blue-500">Work</span>
              </h2>
              <p
                className={`text-lg md:text-xl font-light max-w-3xl mx-auto ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Una selección de proyectos que demuestran mi experiencia en
                desarrollo full stack y diseño de experiencias digitales
                modernas
              </p>
            </div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-commerce Platform"
                description="Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos integrado, panel de administración y dashboard de analytics en tiempo real."
                color="blue"
                technologies={[
                  "React",
                  "TypeScript",
                  "Stripe",
                  "Firebase",
                  "Tailwind",
                ]}
              />

              <ProjectCard
                title="Analytics Dashboard"
                description="Dashboard interactivo para visualización de datos empresariales con gráficos dinámicos, filtros avanzados y reportes exportables en PDF."
                color="green"
                technologies={[
                  "Next.js",
                  "D3.js",
                  "PostgreSQL",
                  "Node.js",
                  "Chart.js",
                ]}
              />

              <ProjectCard
                title="SaaS Landing Page"
                description="Landing page moderna para startup de software con animaciones fluidas, formulario de contacto inteligente y integración con CRM."
                color="purple"
                technologies={[
                  "React",
                  "Framer Motion",
                  "Tailwind",
                  "Netlify",
                  "EmailJS",
                ]}
              />

              <ProjectCard
                title="Task Management App"
                description="Aplicación de gestión de tareas colaborativa con tableros Kanban, chat en tiempo real y notificaciones push para equipos remotos."
                color="orange"
                technologies={[
                  "Vue.js",
                  "Socket.io",
                  "MongoDB",
                  "Express",
                  "JWT",
                ]}
              />

              <ProjectCard
                title="Restaurant Website"
                description="Sitio web para restaurante con menú digital, sistema de reservas online, galería de fotos y integración con redes sociales."
                color="green"
                technologies={[
                  "React",
                  "Sanity CMS",
                  "Vercel",
                  "PayPal",
                  "Google Maps",
                ]}
              />

              <ProjectCard
                title="Crypto Portfolio Tracker"
                description="Aplicación para rastrear portafolio de criptomonedas con gráficos en tiempo real, alertas de precio y análisis de tendencias de mercado."
                color="blue"
                technologies={[
                  "React Native",
                  "CoinGecko API",
                  "Redux",
                  "AsyncStorage",
                ]}
              />
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <p
                className={`text-lg mb-8 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                ¿Te gusta lo que ves? Hablemos de tu próximo proyecto
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-xl"
              >
                Iniciar Proyecto
              </a>
            </div>
          </div>
        </section>

        {/* Sección CONTACT - Contacto */}
        <ContactSection />
      </main>

              {/* Footer */}
        <Footer />

                {/* Botón Scroll to Top */}
        <ScrollToTop />
    </div>
  );
}

export default App;
