import '../sobre/Sobre.css'

function Sobre() {
    return (
        <section className={'sobre'}>
            <div>
                <h1>Sobre Mim</h1>
                <p>Meu grande diferencial é que sou autodidata e tenho uma ótima comunicação. Estou sempre me atualizando, buscando conteúdos e inovações fora do Brasil, para agregar no crescimento e expansão da empresa, trazendo assim a mais alta performance e grandes resultados para a equipe e para toda a empresa em si.</p>
            </div>
            <div>
                <h1>Habilidades</h1>
                <div className={'habilidades'}>
                    <div className={'habilidadesOne'}>
                        <p>React</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Git</p>
                    </div>
                    <div className={'habilidadesTwo'}>
                        <p>GitHub</p>
                        <p>Autodidata</p>
                        <p>Boa Comunicação</p>
                        <p>Fácil aprendizagem</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre