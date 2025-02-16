import { useState } from 'react'
import linkedinLogo from '../../assets/linkedinLogo.png'
import githubLogo from '../../assets/githubLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import downloadIcon from '../../assets/downloadIcon.png'
import s from './sobre.module.scss'

export default function Sobre() {

    const [marcado, setMarcado] = useState(false)
    const mudar = () => {
        setMarcado(!marcado)
    }

    const minhasRedes = (
        <section className={s.minhasRedesLogos}>
            <a target='blank' href="https://www.linkedin.com/in/vinicius-bernardino/"><img src={linkedinLogo} alt="Logo azul do LinkedIn" /></a>
            <a target='blank' href="https://github.com/Vinny1804"><img src={githubLogo} alt="Logo do GitHub" /></a>
            <a target='blank' href="https://www.instagram.com/vinnyaguiarr/"><img src={instagramLogo} alt="Logo do Instagram" /></a>
        </section>
    )

    const download = (<img className={s.downloadIcon} src={downloadIcon}/>)


    return (
        <section className={s.sobreSection}>
            <h1>Sobre Mim</h1>
            <p>Olá! Me chamo Vinicius Aguiar, tenho 28 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Moro em São Paulo, Brasil, e estou iniciando minha jornada na área de tecnologia. Tenho interesse em atuar como Full Stack, explorando tanto o front-end quanto o back-end, e estou sempre me atualizando para expandir meu conhecimento e aprimorar minhas habilidades na área.</p>

            <div className={s.menuMinhasRedes}>

                <label className={s.checkboxContainer}>
                    <input
                    type="checkbox"
                    checked={marcado}
                    onChange={mudar}/>
                    <span className="checkmark">Minhas Redes</span>
                </label>
                <button class={s.button} type="button">
                    <span class={s.buttonText}>Currículo</span>
                    <span class={s.buttonIcon}>{download}</span>
                    </button>
                <>{marcado ? minhasRedes : ""}</>

            </div>
        </section>
    )
}