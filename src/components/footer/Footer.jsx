import s from './footer.module.scss'
import githubIcon from '../../assets/githubIcon.png'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <p>Desenvolvido por Vinicius Aguiar</p>
            <a target='_blank' href='https://github.com/Vinny1804/portfolio'><img src={githubIcon} alt="Icone do Github" /></a>
        </footer>
    )
}