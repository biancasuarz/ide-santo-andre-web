function Contato() {
  return (
    <>
      {/* Section Contato */}
      <section className="w-full p-6 bg-mint-200 mt-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Formulário de Contato */}
          <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Envie uma Mensagem</h3>
          <form action="#" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-primary-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 mt-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-primary-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 mt-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Seu e-mail"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-primary-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full p-3 mt-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
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
