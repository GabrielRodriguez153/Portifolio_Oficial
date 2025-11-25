const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    e.target.reset();
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      value: "gabrodriguez153@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Telefone",
      value: "(13) 99695-2931",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      value: "Registro, SP - Brasil",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-github", url: "#" },
  ];

  return (
    <section
      id="contato"
      className="py-25 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Vamos trabalhar juntos! Entre em contato para discutir seu próximo
          projeto.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Sua mensagem..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                      <i className={`${info.icon} text-orange-500 text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-gray-100 p-4 rounded-xl text-gray-700 hover:bg-orange-500 hover:text-white transition-colors text-lg"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
