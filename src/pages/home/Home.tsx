import ide from '../../assets/images/ide.jpg';

function Home() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="bg-mint-100"
      >
        <div>
          <div
            style={{
              width: '80vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className="text-4xl font-bold text-emerald-700 mt-10">Transforme vidas com o IDE Santo André</h2>
            <p className="text-lg text-gray-700 mt-4 text-center">
            No coração de Santo André, nasce um movimento de amor, esperança e transformação. 
            O IDE Santo André conecta igrejas, voluntários e doadores para levar ajuda a quem mais precisa.
            Juntos, queremos impactar famílias vulneráveis, moradores de rua e crianças, oferecendo não apenas
            auxílio material, mas também o amor e os valores que transformam vidas.

          Junte-se a nós nessa missão de expandir o Reino de Deus e ser luz na nossa comunidade. Faça parte dessa obra e ajude a mudar histórias!
            </p><br></br>
          </div>

          <div
            style={{
              width: '80vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={ide} 
              alt="Imagem da Página Home"
              width="180px"
              className="rounded-full shadow-lg mt-6 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <section className="w-full p-6 bg-mint-200 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {/* Card 1 - Seja Voluntário */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Seja Voluntário</h3>
            <p className="text-gray-600">
              Contribua com seu tempo e habilidades para transformar vidas. Junte-se a nós como
              voluntário!
            </p>
          </div>

          {/* Card 2 - Nossa Missão */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Nossa Missão</h3>
            <p className="text-gray-600">
              Unimos forças para levar esperança e apoio às famílias em vulnerabilidade,
              transformando vidas.
            </p>
          </div>

          {/* Card 3 - Sobre Nós */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Sobre Nós</h3>
            <p className="text-gray-600">
              Conheça mais sobre o nosso projeto, nossa equipe e os valores que nos guiam.
            </p>
          </div>

          {/* Card 4 - Apoie */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Apoie</h3>
            <p className="text-gray-600">
              Faça parte da mudança apoiando financeiramente ou contribuindo com recursos.
            </p>
          </div>

          {/* Card 5 - Contato */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Contato</h3>
            <p className="text-gray-600">
              Entre em contato conosco e saiba como você pode ajudar ou ser ajudado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
