import { FaGlobe, FaDesktop, FaRegNewspaper } from "react-icons/fa";

export const projectsData = [
  {
    id: 1,
    title: "API para Projeto Integrador Mobile",
    description:
      "Uma API RESTful moderna para o sistema AntraVision, que monitora a saúde de plantações usando dados de sensores (umidade) e análises de antracnose em mudas de pupunheiras.",
    technologies: ["Node.js", "MongoDB", "Express", "AWS EC2"],
    gradient: "from-blue-500 to-purple-600",
    icon: FaGlobe,
    category: "Backend",
    githubUrl: "https://github.com/GabrielRodriguez153/API_Mobile_PI.git",
  },
  {
    id: 2,
    title: "Projeto Integrador - Versão Final",
    description:
      "Uma plataforma inteligente para monitoramento, análise e prevenção de antracnose em plantações de pupunheira.",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Vite",
      "Flask",
      "MongoDB",
      "AWS EC2",
    ],
    gradient: "from-green-500 to-teal-600",
    icon: FaDesktop,
    category: "FullStack",
    githubUrl:
      "https://github.com/GabrielRodriguez153/Projeto_Integrador-Versao_Final.git",
  },
  {
    id: 3,
    title: "Vitrine - Laboratorio de Práticas",
    description:
      "A Vitrine de Projetos é uma interface pública desenvolvida em React/Next.js que permite a visualização e votação em representantes de classes",
    technologies: ["React.JS", "Next.JS", "Node.JS"],
    gradient: "from-orange-500 to-red-600",
    icon: FaRegNewspaper,
    category: "Frontend",
    githubUrl:
      "https://github.com/laboratorio-de-praticas-2025-1/vitrine-fe.git",
  },
];
