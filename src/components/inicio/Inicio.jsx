import MinhaFoto from "./imagens/minhaFoto.jpg"
import '../inicio/Inicio.css'

function Inicio() {
    return (
        <section className={'inicio'}>
            <div className={'inicioApresentacao'}>
                <p>Olá, eu sou Wesley Portugal</p>
                <h1>Desenvolvedor<br />
                    Front-End
                </h1>
                <p className={'apresentacaoTexto'}>Sou um desenvolvedor de software,<br/> especializado no front-end de websites</p>
                <button>Entre em Contato</button>
            </div>
            <img src={MinhaFoto} className={'minhaFoto'} />
        </section>
    )
}

export default Inicio