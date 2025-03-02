function Igrejas() {
  const igrejas = [
    {
      nome: 'Igreja Batista Central',
      endereco: 'Rua das Flores, 123 - Centro',
    },
    {
      nome: 'Igreja Presbiteriana da Fé',
      endereco: 'Av. Brasil, 456 - Vila Nova',
    },
    {
      nome: 'Paróquia São José',
      endereco: 'Praça da Paz, 789 - Jardim Alegre',
    },
  ];

  return (
    <section className="w-full p-8 bg-emerald-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-emerald-700">Igrejas Parceiras</h2>
        <p className="text-lg text-emerald-600 mt-4">
          Conheça as igrejas parceiras que estão ao nosso lado transformando vidas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {igrejas.map((igreja, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">{igreja.nome}</h3>
            <p className="text-emerald-600">{igreja.endereco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Igrejas;
