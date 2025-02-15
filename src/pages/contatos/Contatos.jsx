import { useState } from 'react'
import emailIcone from '../../assets/emailIcone.png'
import whatsappIcone from '../../assets/whatsappIcone.png'
import QRCodeWhatsapp from '../../assets/QRCodeWhatsapp.png'

import s from './contatos.module.scss'
import emailjs from '@emailjs/browser'

export default function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [mudarContato, setMudarContato] = useState(true)


    const sendEmail = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos')
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send('service_o8stmfp', 'template_213z59t', templateParams, 'v_UpB5YytX5mdmFZE')
        .then((response) => {
            console.log('Email Enviado', response.status, response.text);
            setName('')
            setEmail('')
            setMessage('')
            
        }, (err) => {
            console.log('ERRO', err);
            
        })
    }

    const emailForm = (
        <div className={s.container}>
                <h2 className={s.title}>E-mail</h2>
                
                <form className={s.form} onSubmit={sendEmail}>
                    <input
                    className={s.input}
                    type="text"
                    placeholder='Digite seu nome'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />

                    <input
                    className={s.input}
                    type="text"
                    placeholder='Digite seu e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />

                    <textarea
                        className={s.textarea}
                        placeholder='Digite sua mensagem...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <input className={s.button} type="submit" value='Enviar' />
                </form>

            </div>
    )

    const whatsappLinks = (
        <section className={s.whatsappSection}>
            <h2>WhatsApp</h2>
            <img src={QRCodeWhatsapp} alt="QRCode para meu Whatsapp" />
            <button><a target='blank' href="https://wa.me/5511970134342">Abrir WhatsApp Web</a></button>
        </section>
    )

    const whatsappQRCode = (<img src={QRCodeWhatsapp}/>)

    return (
        <section className={s.contatoSection}>

            <section className={s.entreEmContato}>
                <h1>Entre em Contato:</h1>
                <div>
                    <img src={emailIcone} alt="Icone de um envelope azul (E-mail)" onClick={() => setMudarContato(true)}/>

                    <img src={whatsappIcone} alt="Icone do Whatsapp" onClick={() => setMudarContato(false)}/>
                </div>
            </section>


                <>{mudarContato ? emailForm : whatsappLinks}</>
                


        </section>
    )
}