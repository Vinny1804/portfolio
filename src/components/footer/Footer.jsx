import s from './footer.module.scss'
import githubIconFooter from '../../assets/githubIconFooter.png'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <p>Desenvolvido por Vinicius Aguiar</p>
            <a target='blank' href='https://github.com/Vinny1804/portfolio'><img src={githubIconFooter} alt="Icone do Github" /></a>
        </footer>
    )
}