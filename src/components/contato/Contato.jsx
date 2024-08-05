import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import '../contato/Contato.css'

function Contato() {
    return (
        <section className={'contato'}>
            <div className={'contatoTopo'}>
                <h1>Contato</h1>
                <p>Entre em contato comigo!</p>
            </div>
            <div className={'contatoRedes'}>
                <FaEnvelope />
                <p>wesleyportugal250@gmail.com</p>
                <FaLinkedin />
                <p>linkedin.com/wesleyportugal</p>
                <FaSquareWhatsapp />
                <p>21 97498-6196</p>
                <FaGithub />
                <p>github.com/wesleyportugalf5</p>
            </div>
        </section>
    )
}

export default Contato