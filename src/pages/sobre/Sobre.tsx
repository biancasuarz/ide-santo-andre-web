import sobre from "../../assets/images/sobre.png";
import { motion } from "framer-motion";

function Sobre() {
    return (
        <div className="bg-gradient-to-b from-mint-50 to-white min-h-screen">
            {/* Header Section with Background Shape */}
            <div className="relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200 rounded-full opacity-40"></div>

                <section className="relative z-10 flex justify-center py-16">
                    <div className="w-11/12 max-w-6xl flex flex-col items-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl font-bold text-emerald-700 mb-6 text-center leading-tight"
                        >
                            Um chamado para <span className="text-emerald-900 underline decoration-4 decoration-emerald-600 underline-offset-8">amar e servir</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-xl text-gray-700 text-center mb-12 max-w-3xl leading-relaxed"
                        >
                            O <span className="text-emerald-700 font-bold">IDE Santo André</span> é mais do que um projeto, é um
                            chamado para fazer a diferença. Unimos igrejas, voluntários e doadores em um
                            esforço coletivo para levar suporte e esperança a quem mais precisa.
                        </motion.p>
                    </div>
                </section>
            </div>

            {/* Image Section with Enhanced Overlay */}
            <div className="relative w-full max-w-7xl mx-auto px-4 -mt-6 mb-16">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Overlay aprimorado com gradiente mais suave */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/60 via-emerald-700/40 to-transparent z-10"></div>
                    <img
                        src={sobre}
                        alt="IDE Santo André em ação"
                        className="w-full h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-in-out"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-white/95 backdrop-blur p-8 rounded-lg shadow-xl border-l-4 border-emerald-500"
                        >
                            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                                <span className="inline-block w-10 h-10 mr-3 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                Nossa Missão
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Transformar a realidade de Santo André, levando suporte imediato às famílias vulneráveis e
                                construindo as bases para um futuro melhor através da educação, cultura e dignidade para todos.
                            </p>
                            <div className="mt-4 pt-4 border-t border-emerald-100">
                                <p className="text-emerald-700 font-semibold">
                                    Unidos por uma cidade que cuida, acolhe e transforma.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Ações Section with Enhanced Icons */}
            <section className="w-full max-w-6xl mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12 relative">
                    <span className="relative z-10">Nossas Ações</span>
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-emerald-300 rounded-full"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-start gap-5 p-6 rounded-xl bg-white shadow-lg border-l-4 border-emerald-500"
                    >
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-2">
                                Apoio a Famílias
                            </h3>
                            <p className="text-gray-600">
                                Distribuição de cestas básicas e itens essenciais para famílias em situação de vulnerabilidade social.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-start gap-5 p-6 rounded-xl bg-white shadow-lg border-l-4 border-emerald-500"
                    >
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-2">
                                Educação e Aprendizado
                            </h3>
                            <p className="text-gray-600">
                                Reforço escolar, orientação educacional e oficinas de aprendizado para crianças e adolescentes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-start gap-5 p-6 rounded-xl bg-white shadow-lg border-l-4 border-emerald-500"
                    >
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-2">
                                Cultura e Música
                            </h3>
                            <p className="text-gray-600">
                                Aulas de música, instrumentos e atividades culturais que promovem o desenvolvimento de talentos.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="flex items-start gap-5 p-6 rounded-xl bg-white shadow-lg border-l-4 border-emerald-500"
                    >
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-2">
                                Apoio à População de Rua
                            </h3>
                            <p className="text-gray-600">
                                Refeições, kits de higiene e suporte para recuperação da dignidade de pessoas em situação de rua.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        No <span className="text-emerald-800 font-bold">IDE Santo André</span>, cada{" "}
                        doação, cada esforço, e cada oração fazem parte de uma missão maior:
                        <span className="bg-emerald-100 px-2 py-1 rounded text-emerald-800 font-bold">mudar o mundo, uma vida de cada vez</span>.
                    </p>
                </div>
            </section>

            {/* CTA Cards Section */}
            <section className="w-full py-16 bg-gradient-to-r from-emerald-50 to-mint-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-emerald-800 text-center mb-16 relative">
                        <span className="relative z-10">Como Participar</span>
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-emerald-300 rounded-full"></span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Card 1 - Seja Voluntário */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3">Seja Voluntário</h3>
                            <p className="text-gray-600 flex-grow">
                                Contribua com seu tempo e habilidades para transformar vidas em nossa comunidade.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                Quero Ajudar
                            </button>
                        </motion.div>

                        {/* Card 2 - Nossa Missão */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3">Nossa Missão</h3>
                            <p className="text-gray-600 flex-grow">
                                Unimos forças para levar esperança e apoio às famílias em vulnerabilidade.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                Saiba Mais
                            </button>
                        </motion.div>

                        {/* Card 3 - Sobre Nós */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3">Sobre Nós</h3>
                            <p className="text-gray-600 flex-grow">
                                Conheça mais sobre o nosso projeto, nossa equipe e os valores que nos guiam.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                Nossa História
                            </button>
                        </motion.div>

                        {/* Card 4 - Apoie */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3">Apoie</h3>
                            <p className="text-gray-600 flex-grow">
                                Faça parte da mudança apoiando financeiramente ou contribuindo com recursos.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                Doar Agora
                            </button>
                        </motion.div>

                        {/* Card 5 - Contato */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full"
                        >
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3">Contato</h3>
                            <p className="text-gray-600 flex-grow">
                                Entre em contato conosco e saiba como você pode ajudar ou ser ajudado.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                                Fale Conosco
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Section - Redesigned */}
            <section className="w-full max-w-6xl mx-auto px-4 py-16">
                <div className="bg-emerald-50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-full transform translate-x-20 -translate-y-20 opacity-70"></div>

                    <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">O Impacto da Sua Ajuda</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3 text-center">Desenvolvimento Educacional</h3>
                            <p className="text-gray-600 text-center">
                                Com seu apoio, podemos oferecer reforço escolar para crianças, reduzindo a evasão escolar e
                                melhorando o desempenho acadêmico, abrindo portas para um futuro melhor.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3 text-center">Segurança Alimentar</h3>
                            <p className="text-gray-600 text-center">
                                Sua contribuição ajuda a garantir que famílias não passem fome, proporcionando nutrição adequada
                                que impacta diretamente a saúde e capacidade de aprendizado das crianças.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto text-emerald-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700 mb-3 text-center">Comunidade Transformada</h3>
                            <p className="text-gray-600 text-center">
                                Juntos, podemos criar uma cidade onde as pessoas se importam umas com as outras, gerando uma
                                cultura de solidariedade que transforma a sociedade como um todo.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-xl text-emerald-700 font-semibold">
                            Sua ajuda não é apenas uma doação, é um investimento na construção de uma cidade mais justa e solidária.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition text-lg font-medium">
                            Faça Parte Desta Transformação
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sobre;