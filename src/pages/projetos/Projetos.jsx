import s from './projetos.module.scss'
import projetoLivrosVNW from '../../assets/projeto1.png'
import projetoLojaVNW from '../../assets/projeto2.png'
import githubIcon from '../../assets/githubIcon.png'
import deployIcon from '../../assets/deployIcon.png'
import { useState } from 'react'

export default function Projetos() {

    const listaProjetos = [
        {
            id: 1,
            imagemSRC: projetoLivrosVNW,
            imagemALT: "Imagem do Projeto 1",
            nomeProjeto: "Projeto 1",
            linkCodigo: "https://github.com/seu-repositorio/projeto1",
            linkDeploy: "https://seu-deploy.com/projeto1"
        },
        {
            id: 2,
            imagemSRC: projetoLojaVNW,
            imagemALT: "Imagem do Projeto 2",
            nomeProjeto: "Projeto 2",
            linkCodigo: "https://github.com/seu-repositorio/projeto2",
            linkDeploy: "https://seu-deploy.com/projeto2"
        },
    ]

    const projetosBoard = (
        <section className={s.cardDoProjeto}>

            {listaProjetos.map(item => (
                <section>
                    <img className={s.imgProjeto} src={item.imagemSRC} alt={item.imagemALT} />
                    
                    <div className={s.infoProjeto}>
                        <p className={s.nomeDoProjeto}>{item.nomeProjeto}</p>
                    <div className={s.icones}>
                        <a target='blank' href={item.linkCodigo}><img className={s.infoIcones} src={githubIcon} alt="Icone do Github" /></a>
                        <a target='blank' href={item.linkDeploy}><img className={s.infoIcones} src={deployIcon} alt="Icone de uma seta (deploy)" /></a>
                    </div>
                    </div>
                </section>
            ))}
    </section>
    )

    return (
        <section className={s.projetosSection}>
            <section>{projetosBoard}</section>
        </section>
    )
}