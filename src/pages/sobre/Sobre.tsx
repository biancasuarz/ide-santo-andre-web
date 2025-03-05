import pages from '../../assets/images/pages.png';

function Sobre() {
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
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
              >
                  <h2 className="text-4xl font-bold text-emerald-700 mt-10">Um chamado para amar e servir</h2>
                  <p className="text-lg text-primary mt-4 text-center">
                  O IDE Santo André é mais do que um projeto, é um chamado para fazer a diferença. 
                  Nosso propósito é reunir igrejas, voluntários e doadores de toda a cidade em um esforço
                  coletivo para levar suporte e esperança a quem mais precisa.

                  Acreditamos que cada gesto de amor pode transformar vidas. Por isso, nossa missão é ajudar
                  famílias em situação de vulnerabilidade com cestas básicas, oferecer atividades para crianças 
                  como reforço escolar e, futuramente, aulas de música, além de apoiar moradores em situação de rua.
                  Queremos discipular pessoas e expandir o Reino de Deus, deixando um legado de cuidado e solidariedade
                  em nossa cidade.

                  No IDE Santo André, cada doação, cada esforço, e cada oração fazem parte de uma missão maior: 
                  mudar o mundo, uma vida de cada vez.
                  </p>

                  <p className="text-lg text-primary mt-4 text-center">
                      Estamos comprometidos em agir com ética, transparência e responsabilidade. Se você deseja se
                      envolver conosco, seja como voluntário, doador ou parceiro, entre em contato e faça parte dessa
                      transformação!
                  </p><br></br>

                  <div
                    style={{
                    width: '80vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <img
                    src={pages}
                    alt="Imagem da Página Sobre"
                    width="150px"
                    className="rounded-full shadow-lg mt-4 object-cover"
                    />
                </div>
              </div>
          </div>

          {/* Section Cards */}
          <section className="w-full p-6 bg-secondary mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
                  {/* Card 1 - Seja Voluntário */}
                  <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Seja Voluntário</h3>
                      <p className="text-gray-700">
                          Contribua com seu tempo e habilidades para transformar vidas. Junte-se a nós como
                          voluntário!
                      </p>
                  </div>

                  {/* Card 2 - Nossa Missão */}
                  <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Nossa Missão</h3>
                      <p className="text-gray-700">
                          Unimos forças para levar esperança e apoio às famílias em vulnerabilidade,
                          transformando vidas.
                      </p>
                  </div>

                  {/* Card 3 - Sobre Nós */}
                  <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Sobre Nós</h3>
                      <p className="text-gray-700">
                          Conheça mais sobre o nosso projeto, nossa equipe e os valores que nos guiam.
                      </p>
                  </div>

                  {/* Card 4 - Apoie */}
                  <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Apoie</h3>
                      <p className="text-gray-700">
                          Faça parte da mudança apoiando financeiramente ou contribuindo com recursos.
                      </p>
                  </div>

                  {/* Card 5 - Contato */}
                  <div className="bg-mint-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                      <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Contato</h3>
                      <p className="text-gray-700">
                          Entre em contato conosco e saiba como você pode ajudar ou ser ajudado.
                      </p>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Sobre;
