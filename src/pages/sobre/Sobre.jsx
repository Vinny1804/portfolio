
import linkedinLogo from '../../assets/linkedinLogo.png'
import githubLogo from '../../assets/githubLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import downloadIcon from '../../assets/downloadIcon.png'
import s from './sobre.module.scss'

export default function Sobre() {

    // const [marcado, setMarcado] = useState(false)
    // const mudar = () => {
    //     setMarcado(!marcado)
    // }


    const download = (<img className={s.downloadIcon} src={downloadIcon}/>)


    return (
        <section className={s.sobreSection}>
            <h1>OLÁ! EU SOU
                <span className={s.nome}>Vinicius Aguiar</span>
            </h1>
            <p>
                Um <span>Desenvolvedor Full Stack</span> e estudante de Análise e Desenvolvimento de Sistemas. Estou sempre aprimorando minhas habilidades, explorando novas tecnologias e desenvolvendo projetos que me desafiem a crescer como profissional.
            </p>

            <label className={s.menu}>
                Meus Links
                
                <input id="toggleChecker" className={s.toggleChecker} defaultChecked type="checkbox" />
                <label id="togglerLable" className={s.togglerLable} for="toggleChecker">
                    <div className={s.switch}>
                        <span className={s.line1}></span>
                        <span className={s.line2}></span>
                        <span className={s.line3}></span>
                    </div>
                </label>

                <section className={s.menuContainer}>
                    
                    <div className={s.menuList}>
                        <a href='/curriculo.pdf' download='Curriculo Vinicius Aguiar.pdf'>
                        <button className={s.button} type="button">
                            <span className={s.buttonText}>Currículo</span>
                            <span className={s.buttonIcon}>{download}</span>
                        </button>
                        </a>
                    </div>

                    <div className={s.menuList}>
                        <a target='_blank' href="https://www.linkedin.com/in/vinicius-bernardino/">
                        <button className={s.button} type="button">
                            <span className={s.buttonText}>LinkedIn</span>
                            <span className={s.buttonIcon}><img src={linkedinLogo} alt="Logo azul do LinkedIn" /></span>
                        </button>
                        </a>
                    </div>                                   
                    
                    <div className={s.menuList}>
                        <a target='_blank' href="https://github.com/Vinny1804">
                        <button className={s.button} type="button">
                            <span className={s.buttonText}>GitHub</span>
                            <span className={s.buttonIcon}><img src={githubLogo} alt="Logo do GitHub" /></span>
                        </button>
                        </a>
                    </div>  
                    
                    <div className={s.menuList}>
                        <a target='_blank' href="https://www.instagram.com/vinnyaguiarr/">
                        <button className={s.button} type="button">
                            <span className={s.buttonText}>Instagram</span>
                            <span className={s.buttonIcon}><img src={instagramLogo} alt="Logo do Instagram" /></span>
                        </button>
                        </a>
                    </div>

                </section>
            </label>

        </section>
    )
}