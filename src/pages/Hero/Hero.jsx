import { useEffect, useState } from "react";
import ImageHero from "../../assets/HomeLogo.svg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Desenvolvedor Full-Stack";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    const startTimer = setTimeout(typeWriter, 500);

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <section
      id="início"
      className="gradient-bg text-white min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-blue-900/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-orange-500/20"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 py-22 lg:py-0">
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left animate-fadeIn">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg lg:text-xl mb-4 text-white/80 font-light tracking-wide">
              Olá, eu sou
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Gabriel <span className="gradient-text">Henrique</span>
            </h1>

            <div className="mb-8 h-12 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl lg:text-4xl font-semibold gradient-text inline-flex items-center">
                <span className="typewriter-text font-mono">{displayText}</span>
                {!isTypingComplete && (
                  <span className="typewriter-caret ml-2">|</span>
                )}
              </h2>
            </div>

            <p className="text-base lg:text-lg mb-8 text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify lg:text-left">
              Transformo ideias em soluções digitais inovadoras com código
              limpo, design responsivo e performance excepcional. Vamos criar
              algo incrível juntos?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() =>
                  document
                    .querySelector("#projetos")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center outline-none cursor-pointer flex items-center justify-center"
              >
                <span>Ver Projetos</span>
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#contato")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold outline-none cursor-pointer hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center"
              >
                <span>Vamos Conversar</span>
                <i className="fas fa-comment ml-3 group-hover:scale-110 transition-transform duration-300"></i>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Disponível para projetos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center animate-float">
          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <img
                src={ImageHero}
                alt="Gabriel Henrique - Desenvolvedor Full-Stack"
                className="relative z-20 w-80 h-96 lg:w-96 lg:h-[28rem] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
