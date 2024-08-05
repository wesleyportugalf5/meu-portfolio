import '../projetos/Projetos.css'
import Modelo from './imagens/modelo.png'

function Projetos() {
    return (
        <section className={'projetos'}>
            <h1>Projetos</h1>
            <div>
                <img src={Modelo} alt="aa" />
                <h3>Viagem: sua viagem dos sonhos</h3>
                <p>Um site de viagens e turismo. Um guia turístico. Nele você pode escontrar diversos destinos no Brasil e ao redor do mundo, com as melhores dicas e novidades, como as melhores atrações de cada região;clima;restaurantes e hotéis.</p>
                <p>Tecnologias: JavaScript, HTML, CSS, Git e GitHub</p>
                <div>
                    <button>Ver site</button>
                    <button>Ver no GitHub</button>
                </div>
            </div>
            <div>
                <img src={Modelo} alt="aa" />
                <h3>Receitas Deliciosas: de da água na boca</h3>
                <p>Um site de viagens e turismo. Um guia turístico. Nele você pode encontrar diversos destinos no Brasil e ao redor do mundo, com as melhores dicas e novidades, como as melhores atrações de cada região; clima; restaurantes e hotéis.</p>
                <p>Tecnologias: JavaScript, HTML, CSS, Git e GitHub</p>
                <div>
                    <button>Ver site</button>
                    <button>Ver no GitHub</button>
                </div>
            </div>
            <div>
                <img src={Modelo} alt="aa" />
                <h3>Cafeteria Comfort: um lugar pra chamar de casa</h3>
                <p>Um site de uma cafeteria. Nele você pode conhecer mais a respeito da cafeteria. Descobrir as novidades, como sobremesas novas.  Pode saber que tipo de café é utilizado, onde fica localizada e como chegar.</p>
                <p>Tecnologias: JavaScript, HTML, CSS, Git e GitHub</p>
                <div>
                    <button>Ver site</button>
                    <button>Ver no GitHub</button>
                </div>
            </div>
        </section>
    )
}

export default Projetos