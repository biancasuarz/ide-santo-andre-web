function SejaVoluntario() {
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
            <h2 className="text-4xl font-bold text-slate-800 mt-10">Seja Voluntário</h2>
            <p className="text-lg text-emerald-700 mt-4 text-center">
              Ser voluntário no IDE Santo André é uma oportunidade única de impactar vidas e fazer a diferença
              em nossa comunidade. Através do seu tempo e habilidades, você pode ajudar a transformar a vida de
              famílias em situação de vulnerabilidade social.
            </p>
            <p className="text-lg text-emerald-700 mt-4 text-center">
              Junte-se a nós! Se você possui um coração solidário e deseja colaborar com nossa missão, temos
              várias formas de voluntariado que podem se encaixar com seus interesses e habilidades.
            </p>
          </div>
        </div>
  
        {/* Section Cards */}
        <section className="w-full p-6 bg-emerald-100 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {/* Card 1 - Ações Voluntárias */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Ações Voluntárias</h3>
              <p className="text-emerald-600">
                Participe de eventos e ações sociais organizados pelo IDE Santo André, como doações e campanhas
                de arrecadação.
              </p>
            </div>
  
            {/* Card 2 - Atividades Educacionais */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Atividades Educacionais</h3>
              <p className="text-emerald-600">
                Compartilhe seu conhecimento com crianças, jovens e adultos em atividades educativas, oficinas e
                cursos.
              </p>
            </div>
  
            {/* Card 3 - Apoio Psicológico */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Apoio Psicológico</h3>
              <p className="text-emerald-600">
                Se você é psicólogo ou tem experiência na área, pode oferecer apoio emocional e psicológico
                para famílias em vulnerabilidade.
              </p>
            </div>
  
            {/* Card 4 - Apoio Logístico */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Apoio Logístico</h3>
              <p className="text-emerald-600">
                Ajude na organização de eventos, transporte de doações e outros serviços logísticos que garantem
                o sucesso das nossas iniciativas.
              </p>
            </div>
  
            {/* Card 5 - Parcerias Institucionais */}
            <div className="bg-emerald-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">Parcerias Institucionais</h3>
              <p className="text-emerald-600">
                Empresas e organizações podem se tornar nossos parceiros em ações voluntárias, doações e
                patrocínios.
              </p>
            </div>
          </div>
        </section>
  
        {/* Chamada para Ação */}
        <section className="w-full bg-emerald-200 text-slate-800 p-8 mt-10 text-center">
          <h3 className="text-3xl font-bold">Venha Fazer a Diferença!</h3>
          <p className="text-lg mt-4">
            O seu tempo e dedicação podem mudar a vida de muitas pessoas. Seja um voluntário do IDE Santo André e
            ajude a transformar nossa comunidade.
          </p>
          <a
            href="#"
            className="mt-6 inline-block px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Inscreva-se Agora
          </a>
        </section>
      </>
    );
  }
  
  export default SejaVoluntario;
  