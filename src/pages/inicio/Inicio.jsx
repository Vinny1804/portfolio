import { useState } from 'react'
import icon from '../../assets/cmdIcon.png'
import s from './inicio.module.scss'
import { useNavigate } from 'react-router-dom';


export default function Inicio() {
    
    const navigate = useNavigate()

    // const goToContato = () => {
    //     navigate('/Contato');
    // }

    const [texto, setTexto] = useState('')
    const [saidaUsuario, setSaidaUsuario] = useState('') 
    const [prompt, setPrompt] = useState('') 
    const [input, setInput] = useState('')

    const [desativar, setDesativar] = useState(false);

    const cmdDigitado = (e) => {
        e.preventDefault()
        //console.log('Comando: ', texto);
        setTexto()
        cmdListar()
        cmdAbrirPasta()
    }

    const inputUsuario = () => {
        setInput(
                <>$ 
                <input
                type="text"
                onChange={(e) => setTexto(e.target.value)}
                />
                </>
        )

    }

    const cmdListar = () => {
        if (texto === 'ls') {
            console.log('FUNÇÃO CMDLISTAR ATIVADA');
            setSaidaUsuario('Contato/   Inicio/   Projetos/');
            setPrompt(<p className={s.verde}>vinny@Vinny-Desktop <span className={s.amarelo}>~/Desktop/Portfolio</span></p>)
            inputUsuario()
            setDesativar(true)
        }
    }

    const cmdAbrirPasta = () => {
        if (texto === 'cd Sobre') {
            console.log('CD Sobre ATIVOU');
            navigate('/Sobre')
        } else if (texto === 'cd Projetos') {
            console.log('CD Projetos ATIVOU');
            navigate('/Projetos')
        } else if (texto === 'cd Contato') {
            console.log('CD Contatos ATIVOU');
            navigate('/Contato')
        }
    }
    function cmdLimpar() {
        
    }

    function cmdCdVoltar(params) {
        
    }

    // if (enviarTexto === ls) {
    //     setSaidaUsuario()
    // } else {
    //     setSaidaUsuario('Comando Inválido')
    // }



    return (
        <main className={s.main}>

            <section className={s.cmd}>
                <div className={s.cmdHeader}>
                    <p>C:/Users/vinny/Desktop/Portfolio/Projetos</p>
                    <p>_</p> {/* Provisório - Fazer uma div com os icones*/}
                    <p>[]</p> {/* Provisório*/}
                    <p>X</p> {/* Provisório*/}
                    <p>?</p> {/* Provisório - Colocar comandos disponiveis */}
                </div>

                <div className={s.cmdBody}>
                    <p className={s.verde}>vinny@Vinny-Desktop <span className={s.amarelo}>~/Desktop/Portfolio</span></p>

                    <form onSubmit={cmdDigitado}>
                        <>$</>
                        <input
                        type="text"
                        value={texto} 
                        onChange={(e) => {setTexto(e.target.value)
                            }
                        }
                        disabled={desativar}
                        />
                    <p className={s.saidaPastas}>{saidaUsuario} </p>
                    <>{prompt}</>
                    <>{input}</>

                    <></>
                    
                    
                    
                    
                    
                    </form>
                    {/* <p className={s.verde}> <span className={s.amarelo}>~/Desktop/Portfolio</span></p>
                    <p className={s.digitar}>$ cd Projetos** {}</p> Provisório - fazer uma função no nome projetos */}

                    {/* <p className={s.verde}>vinny@Vinny-Desktop <span className={s.amarelo}>~/Desktop/Portfolio/Projetos**</span></p> 
                    <p>$ |</p> Provisório - fazer uma função / estilizar para ficar piscando somente o | (input) */}
                </div>

            </section>

            {/* <img src={icon} alt="Ícone do prompt de comando (cmd)"/> */}
        </main>
    )
}