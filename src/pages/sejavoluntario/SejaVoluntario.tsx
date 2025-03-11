import React from 'react';
import igrejas from '../../assets/images/igrejas.png';
import { motion } from 'framer-motion';

function SejaVoluntario() {
  return (
    <>
      {/* Hero Section com Gradiente e Animação */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-mint-100 py-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-emerald-400 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-teal-300 blur-3xl -bottom-20 -right-20"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-emerald-700 mb-6 leading-tight relative inline-block">
              Seja um agente de Transformação
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></span>
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              No <span className="text-emerald-800 font-semibold">IDE Santo André</span>, acreditamos que cada ação conta. <br />
              Como voluntário, você será parte de um movimento de amor, compaixão e transformação.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero ser voluntário
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Imagem com Efeito Parallax */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-700/80 to-transparent z-10"></div>
            
            <img
              src={igrejas} 
              alt="IDE Santo André em ação"
              className="w-full h-[500px] object-cover transform transition-all duration-500 hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <h3 className="text-3xl font-bold mb-3">Unidos pela comunidade</h3>
              <p className="text-lg max-w-2xl">Transformando vidas através da solidariedade e do trabalho em equipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação com Cards Sofisticados */}
      <section className="py-16 bg-gradient-to-br from-white to-mint-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Áreas de Atuação</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubra como você pode contribuir com seus talentos e tempo</p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="h-48 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://via.placeholder.com/500x300')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Distribuição de Alimentos</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Contribua com seu tempo na entrega de alimentos para famílias em situação de vulnerabilidade. Uma ação simples que faz toda a diferença.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-emerald-700 font-medium">4-6 horas/semana</span>
                  <button className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Saiba mais →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="h-48 bg-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://via.placeholder.com/500x300')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-700/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Educação e Recreação</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Participe de atividades educativas e recreativas que transformam a vida de crianças e adolescentes. Seu tempo pode mudar o futuro deles.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-teal-700 font-medium">2-8 horas/semana</span>
                  <button className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-medium hover:bg-teal-100 transition-colors duration-300">
                    Saiba mais →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="h-48 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://via.placeholder.com/500x300')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Apoio a Moradores de Rua</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Ofereça seu apoio a quem mais precisa. Com gestos simples de cuidado e atenção, podemos trazer dignidade e esperança para os moradores de rua.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-emerald-700 font-medium">3-5 horas/semana</span>
                  <button className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Saiba mais →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testemunhos com Design Moderno */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A Palavra nos Ensina</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">Inspirações bíblicas que nos motivam a servir</p>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testemunho 1 */}
            <div className="bg-emerald-700/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Mateus</h4>
                  <p className="text-emerald-200">25:35</p>
                </div>
              </div>
              <p className="text-emerald-100 italic">
              "Porque tive fome, e destes-me de comer; tive sede, e destes-me de beber; era forasteiro, e hospedastes-me."
              </p>
            </div>

            {/* Testemunho 2 */}
            <div className="bg-emerald-700/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold mr-4">
                  PV
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Provérbios</h4>
                  <p className="text-emerald-200">28:27</p>
                </div>
              </div>
              <p className="text-emerald-100 italic">
              "O que der ao pobre não terá falta, mas o que fechar os olhos terá muitas maldições."
              </p>
            </div>

            {/* Testemunho 3 */}
            <div className="bg-emerald-700/50 p-8 rounded-xl backdrop-blur-sm border border-emerald-600/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold mr-4">
                  MC
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Marcos</h4>
                  <p className="text-emerald-200">16:15</p>
                </div>
              </div>
              <p className="text-emerald-100 italic">
              "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Participar - Com Design Moderno */}
      <section className="py-20 bg-mint-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Como Participar</h2>
                <p className="text-lg mb-8">
                  Junte-se a nós e faça parte desta jornada de transformação. 
                  Seu tempo e dedicação podem fazer toda a diferença.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold mr-3">1</div>
                    <span>Preencha o formulário de inscrição</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold mr-3">2</div>
                    <span>Participe da reunião de orientação</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold mr-3">3</div>
                    <span>Escolha sua área de atuação</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold mr-3">4</div>
                    <span>Comece a transformar vidas!</span>
                  </li>
                </ul>
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">Inscreva-se agora</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Área de interesse</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                      <option>Selecione uma opção</option>
                      <option>Distribuição de alimentos</option>
                      <option>Atividades com crianças</option>
                      <option>Apoio a moradores de rua</option>
                      <option>Outras atividades</option>
                    </select>
                  </div>
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Quero ser voluntário
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Links Rápidos com Design Cards Elegantes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 - Seja Voluntário */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-50 to-mint-100 p-6 rounded-xl shadow-md border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Seja Voluntário</h3>
              <p className="text-gray-600 mb-4">
                Contribua com seu tempo e habilidades para transformar vidas.
              </p>
              <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Card 2 - Nossa Missão */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-50 to-mint-100 p-6 rounded-xl shadow-md border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Nossa Missão</h3>
              <p className="text-gray-600 mb-4">
                Unimos forças para levar esperança e apoio às famílias.
              </p>
              <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Card 3 - Sobre Nós */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-50 to-mint-100 p-6 rounded-xl shadow-md border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Sobre Nós</h3>
              <p className="text-gray-600 mb-4">
                Conheça mais sobre o nosso projeto e nossos valores.
              </p>
              <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Card 4 - Apoie */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-50 to-mint-100 p-6 rounded-xl shadow-md border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Apoie</h3>
              <p className="text-gray-600 mb-4">
                Faça parte da mudança apoiando financeiramente.
              </p>
              <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Card 5 - Contato */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-50 to-mint-100 p-6 rounded-xl shadow-md border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Contato</h3>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco e saiba como ajudar.
              </p>
              <a href="#" className="text-emerald-500 font-medium hover:text-emerald-700 inline-flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SejaVoluntario;