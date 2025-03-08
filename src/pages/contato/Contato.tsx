function Contato() {
  return (
    <>
      {/* Section Contato */}
      <section className="w-full p-6 bg-mint-50 mt-10">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          {/* Título da Seção */}
          <h3 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Fale Conosco
          </h3>

          {/* Formulário de Contato */}
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-primary-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-md hover:shadow-lg transition-shadow duration-200"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-primary-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-md hover:shadow-lg transition-shadow duration-200"
                placeholder="Seu e-mail"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-primary-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-md hover:shadow-lg transition-shadow duration-200"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors shadow-md hover:shadow-xl"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contato;
