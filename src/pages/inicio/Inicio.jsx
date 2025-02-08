import { useState } from 'react'
import icon from '../../assets/cmdIcon.png'
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
            setSaidaPastas('Contato/   Inicio/   Projetos/');
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
        } else if (texto === 'cd Contato' || novoTexto === 'cd Contato') {
            navigate('/Contato')
        }
    }

    return (
            <main className={s.main}>
            {trocarInicio ? (
            <section className={s.cmd}>
                <div className={s.cmdHeader}>
                <p>C:/Users/vinny/Desktop/Portfolio/Projetos</p>
                <p>_</p> {/* Provisório */}
                <p>[]</p> {/* Provisório */}
                <p>X</p> {/* Provisório */}
                <p>?</p> {/* Provisório */}
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
                src={icon} 
                alt="Ícone do prompt de comando (cmd)" 
                onClick={() => setTrocarInicio(true)} 
            />
            )}
        </main>
    )
}