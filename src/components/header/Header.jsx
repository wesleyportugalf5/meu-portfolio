import '../header/Header.css'

function Header() {
    return (
        <header>
            <h3>Portfólio</h3>
            <nav>
                <ul className={'menu'}>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header