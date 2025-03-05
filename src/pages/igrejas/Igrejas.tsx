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
    <section className="w-full p-6 bg-mint-200 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-emerald-700">Unindo forças para transformar nossa cidade</h2>
        <p className="text-lg text-primary-600 mt-4">
        O IDE Santo André acredita no poder da união entre igrejas para levar esperança a nossa comunidade. 
        Convidamos igrejas de Santo André a se tornarem parceiras dessa obra, contribuindo com recursos, 
        voluntários ou apoio espiritual.

        Juntos, podemos:

        Atender famílias em situação de vulnerabilidade.
        Organizar atividades e eventos que impactem crianças e jovens.
        Ajudar moradores em situação de rua com apoio e discipulado.
        Sua igreja pode ser uma força ativa na transformação da cidade. Entre em contato e saiba como participar!

        Conheça as igrejas parceiras que estão ao nosso lado transformando vidas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {igrejas.map((igreja, index) => (
          <div
            key={index}
            className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">{igreja.nome}</h3>
            <p className="text-gray-600">{igreja.endereco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Igrejas;
