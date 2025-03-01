import handhome from '../../assets/images/handhome.jpg';

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Seja Bem Vindo!</h2>
                        <p>No IDE Santo André, nossa missão é unir forças de igrejas de diferentes denominações
                             para levar esperança e apoio às famílias em vulnerabilidade, transformando vidas com amor,
                             solidariedade e compaixão.</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src={handhome}  // Usando a imagem importada
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
