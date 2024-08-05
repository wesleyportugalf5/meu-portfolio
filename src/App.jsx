import './global.css'
import Header from './components/header/Header'
import Inicio from './components/inicio/Inicio'
import Sobre from './components/sobre/Sobre'
import Projetos from './components/projetos/Projetos'
import Contato from './components/contato/Contato'

function App() {
  return (
    <body>
    <Header />
    <Inicio />  
    <Sobre />
    <Projetos />
    <Contato />
    </body>
  )
}

export default App
