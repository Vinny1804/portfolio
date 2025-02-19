import s from './projetos.module.scss'
import githubIcon from '../../assets/githubIcon.png'
import deployIcon from '../../assets/deployIcon.png'
import projetoLivrosVNW from '../../assets/projetoLivrosVNW.png'
import projetoLojaVNW from '../../assets/projetoLojaVNW.png'
import projetoOutubroRosa from '../../assets/projetoOutubroRosa.png'
import projetoSemaforo from '../../assets/projetoSemaforo.png'
import projetoPadrinhosMagicos from '../../assets/projetoPadrinhosMagicos.png'

export default function Projetos() {

    const listaProjetos = [
        {
            id: 1,
            imagemSRC: projetoLivrosVNW,
            imagemALT: "Imagem da página: Livros Vai na Web",
            nomeProjeto: "Livros Vai na Web",
            linkCodigo: "https://github.com/Vinny1804/DesafioLivrosVNW",
            linkDeploy: "https://desafio-livros-vnw.vercel.app/"
        },
        {
            id: 2,
            imagemSRC: projetoLojaVNW,
            imagemALT: "Imagem da página: Vai na Loja",
            nomeProjeto: "Vai na Loja",
            linkCodigo: "https://github.com/Vinny1804/VainaLoja",
            linkDeploy: "https://vaina-loja.vercel.app/"
        },
        {
            id: 3,
            imagemSRC: projetoOutubroRosa,
            imagemALT: "Imagem da página: Outubro Rosa",
            nomeProjeto: "Outubro Rosa",
            linkCodigo: "https://github.com/Vinny1804/OutubroRosaVNW",
            linkDeploy: "https://outubro-rosa-vnw-seven.vercel.app/"
        },
        {
            id: 4,
            imagemSRC: projetoSemaforo,
            imagemALT: "Imagem da página: Semáforo",
            nomeProjeto: "Semáforo",
            linkCodigo: "https://github.com/Vinny1804/projeto-semaforo-VNW",
            linkDeploy: "https://projeto-semaforo-vnw.vercel.app/"
        },
        {
            id: 5,
            imagemSRC: projetoPadrinhosMagicos,
            imagemALT: "Imagem da página: Padrinhos Mágicos",
            nomeProjeto: "Padrinhos Mágicos",
            linkCodigo: "https://github.com/Vinny1804/PadrinhosMagicosVNW",
            linkDeploy: "https://padrinhos-magicos-vnw.vercel.app/"
        },
    ]

    const projetosBoard = (
        <section className={s.projetosSection}> 

            {listaProjetos.map(item => (
                <section className={s.cardDoProjeto}>

                    <img className={s.imgProjeto} src={item.imagemSRC} alt={item.imagemALT} />

                    <div className={s.infoProjeto}>
                        <p className={s.nomeDoProjeto}>{item.nomeProjeto}</p>
                    <div className={s.icones}>
                        <a target='_blank' href={item.linkCodigo}><img className={s.infoIcones} src={githubIcon} title='Github' alt="Icone do Github" /></a>
                        <a target='_blank' href={item.linkDeploy}><img className={s.infoIcones} src={deployIcon} title='Deploy' alt="Icone de uma seta (deploy)" /></a>
                    </div>
                    </div>
                </section>
            ))}
    </section>
    )

    return (
        <section>
            <h1 className={s.titulo}>Projetos</h1>
            {projetosBoard}
        </section>
    )
}