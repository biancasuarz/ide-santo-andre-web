import sobre from "../../assets/images/sobre.png";

function Sobre() {
    return (
        <>
            {/* Header Section */}
            <section className="flex justify-center py-10">
                <div className="w-4/5 flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-emerald-700 mb-4 hover:scale-105 hover:opacity-90 transition-transform duration-300">
                        Um chamado para amar e servir
                    </h2>
                    <p className="text-lg text-primary text-center mb-8">
                        O <span className="text-emerald-800 font-semibold">IDE Santo André</span> é mais do que um projeto, é um
                        chamado para fazer a diferença. Nosso propósito é reunir igrejas, voluntários e doadores de toda a cidade
                        em um esforço coletivo para levar suporte e esperança a quem mais precisa.
                    </p>

                    {/* Image */}
                    <div className="w-full max-w-7xl mb-8">
                        <img
                            src={sobre}
                            alt="Imagem da Página Sobre"
                            className="w-full rounded-xl shadow-lg object-cover transform transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
                        />
                    </div>

                    {/* List of Actions */}
                    <div className="mt-6 text-lg text-primary space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="flex items-center space-x-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="text-emerald-700 text-2xl">💚</span>
                                <span className="text-xl font-semibold text-emerald-700">
                                    Apoiar famílias em vulnerabilidade com cestas básicas.
                                </span>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-center space-x-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="text-emerald-700 text-2xl">📚</span>
                                <span className="text-xl font-semibold text-emerald-700">
                                    Oferecer reforço escolar para crianças.
                                </span>
                            </div>

                            {/* Card 3 */}
                            <div className="flex items-center space-x-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="text-emerald-700 text-2xl">🎶</span>
                                <span className="text-xl font-semibold text-emerald-700">
                                    Aulas de música para o futuro.
                                </span>
                            </div>

                            {/* Card 4 */}
                            <div className="flex items-center space-x-3 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="text-emerald-700 text-2xl">🏠</span>
                                <span className="text-xl font-semibold text-emerald-700">
                                    Apoiar moradores de rua com dignidade.
                                </span>
                            </div>
                        </div>
                    </div>

                    <br />

                    <p className="text-lg text-primary mt-4 text-justify">
                        No <span className="text-emerald-800 font-semibold">IDE Santo André</span>, cada{" "}
                        <span className="text-emerald-800 font-semibold">doação</span>, cada{" "}
                        <span className="text-emerald-800 font-semibold">esforço</span>, e cada{" "}
                        <span className="text-emerald-800 font-semibold">oração</span> fazem parte de uma missão maior:{" "}
                        <span className="text-emerald-800 font-semibold">mudar o mundo, uma vida de cada vez</span>.
                    </p>
                </div>
            </section>

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

export default Sobre;
