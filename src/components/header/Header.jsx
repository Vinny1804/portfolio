import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import Sobre from '../../pages/sobre/Sobre'
import Projetos from '../../pages/projetos/Projetos'
import Contatos from '../../pages/contatos/Contatos'
import { useState } from 'react'
import s from './header.module.scss'

export default function Header() {
    const [menu, setMenu] = useState('Portfólio')

    const trocarMenu = () => {
        if (menu === 'Portfólio') {
            setMenu(
            <section className={s.sectionHeader}>
            <nav>
                <ul>
                    <li><Link className={s.link} to='/' onClick={() => setMenu('Portfólio')}>Início</Link></li>
                    <li><Link className={s.link} to='/sobre'>Sobre</Link></li>
                    <li><Link className={s.link} to='/projetos'>Projetos</Link></li>
                    <li><Link className={s.link} to='/contatos'>Contatos</Link></li>
                </ul>
            </nav>
            </section>
        )}};

    return (
    <BrowserRouter>
        <header className={s.header}>
            <h1>&lt;</h1>
            <h3 className={s.nomePortfolio} onClick={trocarMenu}>{menu}</h3>
            <h1>/&gt;</h1>     
        </header>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
    </Routes>
    </BrowserRouter>
    )
}

