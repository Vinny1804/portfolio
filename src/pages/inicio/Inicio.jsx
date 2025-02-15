import { useState } from 'react'
import icon from '../../assets/cmdIcon.png'
import minimizarIcon from '../../assets/minimizarIcon.png'
import maximizarIcon from '../../assets/maximizarIcon.png'
import fecharIcon from '../../assets/fecharIcon.png'
import interrogacaoIcon from '../../assets/interrogacaoIcon.png'
import s from './inicio.module.scss'
import { useNavigate } from 'react-router-dom';


export default function Inicio() {
    
    const navigate = useNavigate()

    const [texto, setTexto] = useState('')
    const [novoTexto, setNovoTexto] = useState('')
    const [saidaPastas, setSaidaPastas] = useState('') 
    const [prompt, setPrompt] = useState('') 
    const [novoInput, setNovoInput] = useState(false)
    const [desativar, setDesativar] = useState(false)
    const [trocarInicio, setTrocarInicio] = useState(false)

    const cmdDigitado = (e) => {
        e.preventDefault()
        cmdListar()
        cmdAbrirPasta()
    }

    const cmdListar = () => {
        if (texto === 'ls') {
            setSaidaPastas('Contatos/   Inicio/   Projetos/');
            setPrompt(<p className={s.verde}>vinny@Vinny-Desktop <span className={s.amarelo}>~/Desktop/Portfolio</span></p>)
            setNovoInput(true)
            setDesativar(true)
        }
    }

    const cmdAbrirPasta = () => {
        if (texto === 'cd Sobre' || novoTexto === 'cd Sobre') {
            navigate('/Sobre')
        } else if (texto === 'cd Projetos' || novoTexto === 'cd Projetos') {
            navigate('/Projetos')
        } else if (texto === 'cd Contatos' || novoTexto === 'cd Contatos') {
            navigate('/Contatos')
        }
    }

    return (
            <main className={s.main}>
            {trocarInicio ? (
            <section className={s.cmd}>

                <div className={s.cmdHeader}>
                <p>C:/Users/vinny/Desktop/Portfolio/Projetos</p>
                <section className={s.janelaIcones}>
                    <img className={s.iconeJanelaMin} src={minimizarIcon} alt="Icone de minimizar janela" /> 
                    <img className={s.iconeJanela} src={maximizarIcon} alt="Icone de maximizar janela" /> 
                    <img className={s.iconeJanela} src={fecharIcon} onClick={() => setTrocarInicio()} alt="Icone de fechar janela" /> 
                    <img className={s.iconeJanela} src={interrogacaoIcon} alt="Icone de um ponto de interrogação" />
                </section>
                </div>
                <div className={s.cmdBody}>
                <p className={s.verde}>vinny@Vinny-Desktop <span className={s.amarelo}>~/Desktop/Portfolio</span></p>
                <form onSubmit={cmdDigitado}>
                    <>$</>
                    <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    disabled={desativar}
                    />
                    <p className={s.saidaPastas}>{saidaPastas}</p>
                    <p>{prompt}</p>
                    {novoInput && (
                    <>
                        $ 
                        <input 
                        type="text"
                        value={novoTexto}
                        onChange={(e) => setNovoTexto(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && cmdDigitado(e)}
                        />
                    </>
                    )}
                </form>
                </div>
            </section>
            ) : (
            <img
                className={s.imagemCMDIcon}
                src={icon} 
                alt="Ícone do prompt de comando (cmd)" 
                onClick={() => setTrocarInicio(true)} 
            />
            )}
        </main>
    )
}