import "@govbr-ds/core/dist/core.min.css";
import ModalSair from "./Modais/ModalSair";

import ModalFoto from "./Modais/Fotos/ModalFoto";
import ModalDeletarFoto from "./Modais/Fotos/ModalDeletarFoto";
import ModalAdicionarFoto from "./Modais/Fotos/ModalAdicionarFoto";
import ModalEditarFoto from "./Modais/Fotos/ModalEditarFoto";

import ModalAdicionarVideo from "./Modais/Videos/ModalAdicionarVideo";
import ModalDeletarVideo from "./Modais/Videos/ModalDeletarVideo";
import ModalEditarVideo from "./Modais/Videos/ModalEditarVideo"

import ModalDeletarMaterial from "./Modais/Materiais/ModalDeletarMaterial";
import ModalAdicionarMaterial from "./Modais/Materiais/ModalAdicionarMaterial";
import ModalEditarMaterial from "./Modais/Materiais/ModalEditarMaterial";

import ModalDeletarNoticia from "./Modais/Noticias/ModalDeletarNoticia";
import ModalAdicionarNoticia from "./Modais/Noticias/ModalAdicionarNoticia"
import ModalEditarNoticia from "./Modais/Noticias/ModalEditarNoticia";

import ModalDeletarPagina from "./Modais/Paginas/ModalDeletarPagina";
import ModalAdicionarPagina from "./Modais/Paginas/ModalAdicionarPagina";
import ModalEditarPagina from "./Modais/Paginas/ModalEditarPagina";

import ModalDeletarPratica from "./Modais/Praticas/ModalDeletarPratica";
import ModalAdicionarPratica from "./Modais/Praticas/ModalAdicionarPratica";
import ModalEditarPratica from "./Modais/Praticas/ModalEditarPratica";

export default function Overlay ({ isOpen, onClose, type, foto, video, material, noticia, pagina, pratica }) {

    function switchModal(tipo) {
        switch (tipo) {
            case "sair":
                return <ModalSair onClose={onClose} />
            case "foto":
                return <ModalFoto onClose={onClose} foto={foto} />
            case "deletar-foto":
                return <ModalDeletarFoto onClose={onClose} idFoto={foto.id} />
            case "adicionar-foto":
                return <ModalAdicionarFoto onClose={onClose} />
            case "editar-foto":
                return <ModalEditarFoto onClose={onClose} idFoto={foto.id} />
            case "adicionar-video":
                return <ModalAdicionarVideo onClose={onClose} />
            case "deletar-video":
                return <ModalDeletarVideo onClose={onClose} idVideo={video.id} />
            case "editar-video":
                return <ModalEditarVideo onClose={onClose} idVideo={video.id} />
            case "deletar-material" :
                return <ModalDeletarMaterial onClose={onClose} idMaterial={material.id} />
            case "adicionar-material" :
                return <ModalAdicionarMaterial onClose={onClose} />
            case "editar-material" :
                return <ModalEditarMaterial onClose={onClose} idMaterial={material.id} />
            case "deletar-noticia" :
                return <ModalDeletarNoticia onClose={onClose} idNoticia={noticia.id} />
            case "adicionar-noticia" :
                return <ModalAdicionarNoticia onClose={onClose} />
            case "editar-noticia" :
                return <ModalEditarNoticia onClose={onClose} idNoticia={noticia.id} /> 
            case "deletar-pagina" :
                return <ModalDeletarPagina onClose={onClose} idPagina={pagina.id} />
            case "adicionar-pagina" :
                return <ModalAdicionarPagina onClose={onClose}/>
            case "editar-pagina" :
                return <ModalEditarPagina onClose={onClose} idPagina={pagina.id} />
            case "deletar-pratica" :
                return <ModalDeletarPratica onClose={onClose} idPratica={pratica.id}/>
            case "adicionar-pratica" :
                return <ModalAdicionarPratica onClose={onClose}/>
            case "editar-pratica":
                return <ModalEditarPratica onClose={onClose} idPratica={pratica.id} />
            default:
                return;
        }
    }
    return (
        <>
            {
            isOpen ? (
                <div style={styles.overlay}>
                    <div style={styles.overlayBackground}>
                        {
                            switchModal(type)
                         }
                    </div>
                </div>
            ) : null
            }
        </>
    )
}

const styles = {
    overlayBackground: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9,

    }
}