import MinhaFoto from "./imagens/minhaFoto.jpg"
import '../inicio/Inicio.css'

function Inicio() {
    return (
        <section className={'inicio'}>
            <div>
                <p>Wesley Portugal</p>
                <h1>Desenvolvedor<br />
                    Front-End
                </h1>
                <p>Sou um desenvolvedor de software, especializado no front-end de websites</p>
                <button>Entre em Contato</button>
            </div>
            <img src={MinhaFoto} />
        </section>
    )
}

export default Inicio