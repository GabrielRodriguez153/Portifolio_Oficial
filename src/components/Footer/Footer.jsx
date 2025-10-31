const Footer = () => {
  return (
    <footer className="bg-[#141D37] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Byte<span className="text-orange-500">Brew</span>
            </a>
            <p className="text-gray-400 mt-2">Desenvolvedor Full-Stack</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#inicio"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Gabriel Henrique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
