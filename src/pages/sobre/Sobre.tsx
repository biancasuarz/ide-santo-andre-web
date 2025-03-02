function SobreNos() {
    return (
      <>
        {/* Header */}
        <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '80vw',
              display: 'flex',
              flexDirection: 'column', // Mantendo a estrutura em coluna
              alignItems: 'center', // Centralizando os itens
            }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mt-10">Sobre Nós</h2>
            <p className="text-lg text-emerald-700 mt-4 text-center">
              O IDE Santo André é um projeto cristão criado com a missão de unir igrejas de diferentes
              denominações para levar apoio e esperança às famílias em vulnerabilidade social. Nossa
              visão é transformar vidas por meio de ações de amor, solidariedade e compaixão. Acreditamos que
              juntos podemos construir uma sociedade mais justa e solidária.
            </p>
            <p className="text-lg text-emerald-700 mt-4 text-center">
              Estamos comprometidos em agir com ética, transparência e responsabilidade. Se você deseja se
              envolver conosco, seja como voluntário, doador ou parceiro, entre em contato e faça parte dessa
              transformação!
            </p>
          </div>
        </div>
  
        {/* Section Cards */}
        <section className="w-full p-6 bg-emerald-100 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {/* Card 1 - Seja Voluntário */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Seja Voluntário</h3>
              <p className="text-emerald-600">
                Contribua com seu tempo e habilidades para transformar vidas. Junte-se a nós como
                voluntário!
              </p>
            </div>
  
            {/* Card 2 - Nossa Missão */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Nossa Missão</h3>
              <p className="text-emerald-600">
                Unimos forças para levar esperança e apoio às famílias em vulnerabilidade,
                transformando vidas.
              </p>
            </div>
  
            {/* Card 3 - Sobre Nós */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Sobre Nós</h3>
              <p className="text-emerald-600">
                Conheça mais sobre o nosso projeto, nossa equipe e os valores que nos guiam.
              </p>
            </div>
  
            {/* Card 4 - Apoie */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Apoie</h3>
              <p className="text-emerald-600">
                Faça parte da mudança apoiando financeiramente ou contribuindo com recursos.
              </p>
            </div>
  
            {/* Card 5 - Contato */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Contato</h3>
              <p className="text-emerald-600">
                Entre em contato conosco e saiba como você pode ajudar ou ser ajudado.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default SobreNos;
  