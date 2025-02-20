import { useState } from 'react'
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
    const [estilo, setEstilo] = useState(s.cmd)
    const [visivel, setVisivel] = useState(false); 
    const [estaAtivo, setEstaAtivo] = useState(false); 

    const minimizarCMD = () => {
        setEstilo(s.cmdMin);
        setVisivel(true);
    };
    
    const maximizarCMD = () => {
        setEstilo(s.cmdMax);
        setVisivel(false); 
    };

    const cmdDigitado = (e) => {
        e.preventDefault()
        cmdListar()
        cmdAbrirPasta()
    }

    const cmdListar = () => {
        if (texto === 'ls') {
            setSaidaPastas('Contatos/   Sobre/   Projetos/');
            setPrompt(<p className={s.verde}>guest@Vinny-Dev <span className={s.amarelo}>~/awesome-portfolio</span></p>)
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

        const modal = (
            <div className={s.overlay} onClick={() => setEstaAtivo(false)}>
                <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                    <h3>Comandos Disponíveis:</h3>
                    <p><b>ls</b> &#10142; Exibe as páginas disponíveis no portfólio.</p>
                    <p><b>cd + 'NomeDaPágina'</b> &#10142; Navega para a página especificada. Exemplo: <code>cd Projetos</code>.</p>
                    <button onClick={() => setEstaAtivo(false)}>Fechar</button>
                </div>
            </div>
        );

    return (
            <main className={s.main}>
            {trocarInicio ? (
            <section className={estilo}>

                <div className={s.cmdHeader}>
                <p>guest@Vinny-Dev C:/Users/vinny/Desktop/Portfolio</p>

                <section className={s.janelaIcones}>
                    <img className={s.iconeJanelaMin} src={minimizarIcon} onClick={minimizarCMD} alt="Icone de minimizar janela" />    
                    <img className={s.iconeJanela} src={maximizarIcon} onClick={maximizarCMD} alt="Icone de maximizar janela" /> 
                    <img className={s.iconeJanela} src={fecharIcon} onClick={() => {setTrocarInicio(); setEstilo(s.cmd)}} alt="Icone de fechar janela" /> 
                    
                    <img className={s.iconeJanela} src={interrogacaoIcon} onClick={() => setEstaAtivo(true)} alt="Icone de um ponto de interrogação"/>
                    {estaAtivo && modal}  
                </section>
                </div>

                <div className={s.cmdBody}>
                    <p className={s.verde}>guest@Vinny-Dev <span className={s.amarelo}>~/awesome-portfolio</span></p>
                    <form onSubmit={cmdDigitado}>
                        <span className={s.terminalPrompt}>$</span>
                        <input
                        type="text"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        disabled={desativar}
                        />
                        <p className={s.saidaPastas}>{saidaPastas}</p>
                        <p>{prompt}</p>
                        {novoInput && ( <>
                        <span className={s.terminalPrompt}>$</span>
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
                <button className={s.botaoUi} onClick={() => setTrocarInicio(true)}>
                    <span>Prompt</span>
                </button>
            )}
        </main>
    )
}