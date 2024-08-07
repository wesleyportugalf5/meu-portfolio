import '../projetos/Projetos.css'
import Modelo from './imagens/modelo.png'
import Viagem from './imagens/Viagem.png'
import ReceitasDeliciosas from './imagens/ReceitasDeliciosas.png'
import CafeteriaComfort from './imagens/CafeteriaComfort.png'

function Projetos() {
    return (
        <section className={'projetos'}>
            <h1>Projetos</h1>
            <div className={'projetosContainer'}>
                <div className={'projetosElementos'}>
                    <img src={Viagem} alt="aa" className={'projetosImg'}/>
                    <div className={'projetosElementosTexto'}>
                        <h3>Viagem: sua viagem dos sonhos</h3>
                        <p>Um site de viagens e turismo. Um guia turístico. Nele você pode escontrar diversos destinos no Brasil e ao redor do mundo, com as melhores dicas e novidades, como as melhores atrações de cada região;clima;restaurantes e hotéis.</p>
                        <div className={'tecnologiasAndBtn'} id={'tecnologiasAndBtnViagem'}>
                            <p className={'tecnologias'}>Tecnologias: JavaScript, HTML, CSS, Git e GitHub</p>
                            <div className={'btnContainer'}>
                                <a href="https://github.com/wesleyportugalf5/SiteTurismo" target="_blank" rel="noopener noreferrer"><button>Ver no GitHub</button></a>
                                <a href="https://wesleyportugalf5.github.io/SiteTurismo/" target="_blank" rel="noopener noreferrer"><button>Ver site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'projetosElementos'}>
                    <img src={ReceitasDeliciosas} alt="aa" className={'projetosImg'}/>
                    <div className={'projetosElementosTexto'}>
                        <h3>Receitas Deliciosas: de da água na boca</h3>
                        <p>Um site de receitas e dicas culinárias. Nele você pode encontrar diversas receitas deliciosas e fáceis de se fazer.  Desde culinárias mais moderna e as mais tradicionais. Lá você aprende a fazer um simples Cuscuz(pelo menos para muitos) ou até mesmo um Nhoque de Carne Moida.</p>
                        <div className={'tecnologiasAndBtn'} id={'tecnologiasAndBtnReceitas'}>
                            <p className={'tecnologias'}>Tecnologias: JavaScript, HTML, CSS, Git e GitHub</p>
                            <div className={'btnContainer'}>
                                <a href="https://github.com/wesleyportugalf5/SiteReceitas" target="_blank" rel="noopener noreferrer"><button>Ver no GitHub</button></a>
                                <a href="https://wesleyportugalf5.github.io/SiteReceitas/" target="_blank" rel="noopener noreferrer"><button>Ver site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'projetosElementos'}>
                    <img src={CafeteriaComfort} alt="aa" className={'projetosImg'} />
                    <div className={'projetosElementosTexto'}>
                        <h3>Cafeteria Comfort: um lugar pra chamar de casa</h3>
                        <p>Um site de uma cafeteria. Nele você pode conhecer mais a respeito da cafeteria. Descobrir as novidades, como sobremesas novas.  Pode saber que tipo de café é utilizado, onde fica localizada e como chegar.</p>
                        <div className={'tecnologiasAndBtn'} id={'tecnologiasAndBtnCafeteria'}>
                            <p className={'tecnologias'}>Tecnologias: HTML, CSS, Git e GitHub</p>
                            <div className={'btnContainer'}>
                                <a href="https://github.com/wesleyportugalf5/SiteCafeteria" target="_blank" rel="noopener noreferrer"><button>Ver no GitHub</button></a>
                                <a href="https://wesleyportugalf5.github.io/SiteCafeteria/" target="_blank" rel="noopener noreferrer"><button>Ver site</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos