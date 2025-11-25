import { projectsData } from "../../data/projectsData";
import { FaGithub, FaArrowRight, FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-25 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meus Projetos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Confira alguns dos projetos que desenvolvi ao longo da minha
            carreira. Cada um representa um desafio único e uma solução
            inovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
            >
              <div
                className={`h-48 relative bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>

                <project.icon className="text-white text-6xl z-10 transform group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-orange-200 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-gray-200">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 group/link"
                  >
                    <FaGithub className="text-lg group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
