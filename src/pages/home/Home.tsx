import ide from '../../assets/images/ide.jpg';
import { FaHeart, FaHandHoldingHeart, FaPeopleCarry, FaMapMarkerAlt, FaArrowRight, FaRegLightbulb, FaUsers, FaHandsHelping, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

function Home() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section Aprimorada */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            {/* Coluna de Texto */}
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Iniciativa de Desenvolvimento Espiritual</span>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight tracking-tight">
                Transforme vidas com o 
                <span className="text-emerald-600 block mt-2">IDE Santo André</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                No coração de <span className="text-emerald-600 font-medium">Santo André</span>, nasce um movimento de
                amor, esperança e transformação.
                O IDE Santo André conecta igrejas, voluntários e doadores para levar ajuda a quem mais precisa.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                  <FaHeart className="mr-2 text-emerald-500" /> Famílias vulneráveis
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                  <FaHandHoldingHeart className="mr-2 text-emerald-500" /> Moradores de rua
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                  <FaPeopleCarry className="mr-2 text-emerald-500" /> Crianças
                </span>
              </div>
              
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-md inline-flex items-center">
                Como Participar
                <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            {/* Coluna da Imagem */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-emerald-100 transform -rotate-6"></div>
                <div className="absolute -inset-4 rounded-full bg-emerald-200 opacity-70 transform rotate-6"></div>
                <img
                  src={ide}
                  alt="IDE Santo André"
                  className="relative w-72 h-72 object-cover rounded-full border-8 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Faixa de Estatísticas com Visual Aprimorado */}
      <div className="w-full py-10 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">130+</h3>
              <p className="text-emerald-50 font-medium">Famílias Atendidas</p>
            </div>
            <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">25</h3>
              <p className="text-emerald-50 font-medium">Igrejas Parceiras</p>
            </div>
            <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">80+</h3>
              <p className="text-emerald-50 font-medium">Voluntários Ativos</p>
            </div>
            <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">15</h3>
              <p className="text-emerald-50 font-medium">Projetos Realizados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Cards com Navegação Melhorada */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Participe</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Como fazer parte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Existem várias maneiras de fazer parte desta iniciativa e ajudar a transformar vidas em nossa comunidade</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Card 1 - Seja Voluntário */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FaUsers className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Seja Voluntário</h3>
                <p className="text-gray-600 mb-4">
                  Contribua com seu tempo e habilidades para transformar vidas.
                </p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  Saiba mais <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>

            {/* Card 2 - Nossa Missão */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FaRegLightbulb className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Missão</h3>
                <p className="text-gray-600 mb-4">
                  Unimos forças para levar esperança e apoio às famílias em vulnerabilidade.
                </p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  Saiba mais <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>

            {/* Card 3 - Sobre Nós */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FaInfoCircle className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sobre Nós</h3>
                <p className="text-gray-600 mb-4">
                  Conheça mais sobre o nosso projeto e os valores que nos guiam.
                </p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  Saiba mais <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>

            {/* Card 4 - Apoie */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FaHandsHelping className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Apoie</h3>
                <p className="text-gray-600 mb-4">
                  Faça parte da mudança apoiando financeiramente nossos projetos.
                </p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  Saiba mais <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>

            {/* Card 5 - Contato */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FaPhoneAlt className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Contato</h3>
                <p className="text-gray-600 mb-4">
                  Entre em contato conosco e saiba como participar.
                </p>
                <a href="#" className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700">
                  Saiba mais <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Localização/Impacto com Visual Aprimorado */}
      <section className="w-full py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 shadow-md">
                {/* Placeholder para mapa */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg">
                    <FaMapMarkerAlt className="text-6xl text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Santo André, SP</h3>
                    <p className="text-gray-600">Região Metropolitana de São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Nossa Atuação</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Onde Fazemos a Diferença</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Nossa atuação está concentrada em Santo André e região, onde identificamos áreas de vulnerabilidade 
                social com maior demanda por assistência. Nossos projetos são desenvolvidos após minucioso 
                mapeamento das necessidades locais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Centro</h4>
                  <p className="text-gray-600">Atendimento a moradores em situação de rua</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Periferia</h4>
                  <p className="text-gray-600">Suporte a famílias de baixa renda</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Comunidades</h4>
                  <p className="text-gray-600">Projetos sociais com crianças e adolescentes</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-emerald-500 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Instituições</h4>
                  <p className="text-gray-600">Parcerias com abrigos e casas de acolhimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section com Destaque Visual */}
      <section className="w-full py-20 bg-gradient-to-br from-emerald-50 to-emerald-100 border-t border-emerald-200">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-emerald-200 text-emerald-700 rounded-full text-sm font-medium mb-4">Faça a Diferença</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Faça Parte dessa Transformação</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            Cada gesto de solidariedade conta. Juntos podemos levar esperança e dignidade para quem mais precisa.
          </p>
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg inline-flex items-center">
            Quero Participar Agora
            <FaArrowRight className="ml-2" />
          </button>
          <p className="mt-6 text-emerald-600 font-medium">Entre em contato hoje mesmo e descubra como ajudar!</p>
        </div>
      </section>
    </div>
  );
}

export default Home;