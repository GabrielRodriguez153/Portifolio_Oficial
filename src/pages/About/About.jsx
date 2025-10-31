import { experienceData } from "../../data/experienceData";
import PerfilPhoto from "../../assets/FotoPerfil.jpg";

const About = () => {
  const infoItems = [
    {
      icon: "fas fa-graduation-cap",
      title: "Formação",
      description: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: "fas fa-briefcase",
      title: "Experiência",
      description: "1 ano como Desenvolvedor",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      description: "Registro, SP - Brasil",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: "fas fa-language",
      title: "Idiomas",
      description: "Português (Nativo), Inglês (Intermediário)",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section id="sobre" className="py-22 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
          Sobre Mim
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-base">
          Conheça minha trajetória e paixão pelo desenvolvimento de software
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/5">
            <div className="relative mb-10 group">
              <div className="relative z-10">
                <div className="w-72 h-72 bg-gradient-to-r from-orange-500 to-blue-900 rounded-2xl rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
                <img
                  src={PerfilPhoto}
                  alt="Gabriel Henrique - Desenvolvedor Full-Stack"
                  className="absolute top-0 left-0 rounded-2xl shadow-2xl w-72 h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mb-10">
              <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
                Sou um desenvolvedor fullstack apaixonado por tecnologia e por
                criar soluções que realmente fazem a diferença. Gosto de
                transformar ideias em aplicações funcionais, explorando tanto o
                front-end quanto o back-end. Estou sempre aprendendo novas
                ferramentas e buscando evoluir como profissional e como criador.
              </p>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Minha jornada no desenvolvimento de software me permitiu
                trabalhar com diversas tecnologias modernas, desde interfaces
                responsivas até sistemas backend robustos, sempre focando em
                código limpo e boas práticas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-lg w-full"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                  <div className="relative p-4">
                    <div className="flex items-start space-x-3 w-full">
                      <div
                        className={`bg-gradient-to-r ${item.gradient} p-2 rounded-lg text-white shadow-md flex-shrink-0`}
                      >
                        <i className={`${item.icon} text-base`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg mr-3 shadow-md">
                  <i className="fas fa-road text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Minha Jornada
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Da formação à atuação profissional
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative">
                <div className="absolute left-7 top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full transform -translate-x-1/2"></div>

                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start relative group"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center z-10 shadow-md transform transition-transform duration-300 group-hover:scale-105 ${
                        item.type === "education"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600"
                          : "bg-gradient-to-r from-orange-500 to-orange-600"
                      }`}
                    >
                      <i className={`${item.icon} text-white text-base`}></i>
                    </div>

                    <div className="ml-6 flex-1 transform transition-all duration-300 group-hover:-translate-y-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                          <h4 className="text-lg font-bold text-gray-800 mb-2 lg:mb-0">
                            {item.title}
                          </h4>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === "education"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-orange-100 text-orange-800 border border-orange-200"
                            }`}
                          >
                            <i
                              className={`fas ${
                                item.type === "education"
                                  ? "fa-graduation-cap"
                                  : "fa-briefcase"
                              } mr-1`}
                            ></i>
                            {item.type === "education"
                              ? "Educação"
                              : "Experiência"}
                          </span>
                        </div>

                        <div className="flex items-center text-gray-600 mb-3">
                          <i className="fas fa-calendar-alt mr-2 text-orange-500 text-sm"></i>
                          <span className="font-medium text-gray-700 text-sm">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3 text-justify text-sm">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-2 py-1 rounded-full text-xs font-medium border ${
                                item.type === "education"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-orange-50 text-orange-700 border-orange-200"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer da Timeline */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  <i className="fas fa-rocket mr-2 text-sm"></i>
                  <span className="font-medium text-sm">
                    Em busca de novas oportunidades!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
