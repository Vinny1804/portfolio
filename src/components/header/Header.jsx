import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import Sobre from '../../pages/sobre/Sobre'
import Projetos from '../../pages/projetos/Projetos'
import Contato from '../../pages/contato/Contato'
import { useState } from 'react'
import s from './header.module.scss'

export default function Header() {
    const [visivel, setVisivel] = useState(false)
    const [nomeHeader, setNomeHeader] = useState('Portfólio')
    
    const mudarNomeHeader = () => {
        if (visivel) {
            setNomeHeader("Portfólio")
        } else {
            setNomeHeader(
                <section className={s.sectionHeader}>
                <nav>
                    <ul>
                        <li><Link className={s.link} to='/'>Inicio</Link></li>
                        <li><Link className={s.link} to='/sobre'>Sobre</Link></li>
                        <li><Link className={s.link} to='/projetos'>Projetos</Link></li>
                        <li><Link className={s.link} to='/contato'>Contato</Link></li>
                    </ul>
                </nav>
                </section>
            )
        }
        setVisivel(!visivel)
    }

    return (
    <BrowserRouter>
        <header className={s.header}>
            <h1>&lt;Vinicius&gt;</h1>
            <h3 className={s.nomePortfolio} onClick={mudarNomeHeader}>{nomeHeader}</h3>

            <h1>&lt;Aguiar/&gt;</h1>     
        </header>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
        <Route path='/contato' element={<Contato/>}/>
    </Routes>
    </BrowserRouter>

    )
}