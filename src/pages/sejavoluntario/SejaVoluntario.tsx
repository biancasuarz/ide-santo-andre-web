import igrejas from '../../assets/images/igrejas.png';

function SejaVoluntario() {
  return (
    <>
      {/* Header Section */}
      <section className="flex justify-center py-10">
        <div className="w-4/5 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4 hover:scale-105 hover:opacity-90 transition-transform duration-300">
            Seja um agente de Transformação
          </h2>

          <p className="text-lg text-primary text-center mb-8">
            No <span className="text-emerald-800 font-semibold">IDE Santo André</span>, acreditamos que cada ação conta. <br />
            Como voluntário, você será parte de um movimento de amor, compaixão e transformação.
          </p>

          {/* Image */}
          <div className="w-full max-w-7xl mb-8">
            <img
              src={igrejas} 
              alt="Imagem da Página Sobre"
              className="w-full rounded-xl shadow-lg object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
            />
          </div>

          <br />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 text-center">Auxilie na distribuição de cestas básicas</h3>
              <p className="text-gray-700 text-center">
                Contribua com seu tempo na entrega de alimentos para famílias em situação de vulnerabilidade. Uma ação simples que faz toda a diferença.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 text-center">Atividades com crianças e jovens</h3>
              <p className="text-gray-700 text-center">
                Participe de atividades educativas e recreativas que transformam a vida de crianças e adolescentes. Seu tempo pode mudar o futuro deles.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 text-center">Apoiar moradores de rua</h3>
              <p className="text-gray-700 text-center">
                Ofereça seu apoio a quem mais precisa. Com gestos simples de cuidado e atenção, podemos trazer dignidade e esperança para os moradores de rua.
              </p>
            </div>
          </div>
          <br />
        </div>
      </section>

      {/* Section Cards */}
      <section className="w-full p-6 bg-mint-200 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {/* Card 1 - Seja Voluntário */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Seja Voluntário</h3>
            <p className="text-gray-600">
              Contribua com seu tempo e habilidades para transformar vidas. Junte-se a nós como voluntário!
            </p>
          </div>

          {/* Card 2 - Nossa Missão */}
          <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Nossa Missão</h3>
            <p className="text-gray-600"> 
              Unimos forças para levar esperança e apoio às famílias em vulnerabilidade, transformando vidas.
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

export default SejaVoluntario;
