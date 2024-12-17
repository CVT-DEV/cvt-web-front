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

export default function Overlay ({ isOpen, onClose, type, foto, video, material, noticia, pagina, pratica }) {

    return (
        <>
            {
            isOpen ? (
                <div style={styles.overlay}>
                    <div style={styles.overlayBackground}>
                        {
                            type==="sair" ? <ModalSair onClose={onClose} />
                            : type==="foto" ? <ModalFoto onClose={onClose} foto={foto} />
                            : type==="deletar-foto" ? <ModalDeletarFoto onClose={onClose} idFoto={foto.id} />
                            : type==="adicionar-foto" ? <ModalAdicionarFoto onClose={onClose} />
                            : type==="editar-foto" ? <ModalEditarFoto onClose={onClose} idFoto={foto.id} />
                            : type==="adicionar-video" ? <ModalAdicionarVideo onClose={onClose} />
                            : type==="deletar-video" ? <ModalDeletarVideo onClose={onClose} idVideo={video.id} />
                            : type==="editar-video" ? <ModalEditarVideo onClose={onClose} idVideo={video.id} />
                            : type==="deletar-material" ? <ModalDeletarMaterial onClose={onClose} idMaterial={material.id} />
                            : type==="adicionar-material" ? <ModalAdicionarMaterial onClose={onClose} />
                            : type==="editar-material" ? <ModalEditarMaterial onClose={onClose} idMaterial={material.id} />
                            : type==="deletar-noticia" ? <ModalDeletarNoticia onClose={onClose} idNoticia={noticia.id} />
                            : type==="adicionar-noticia" ? <ModalAdicionarNoticia onClose={onClose} />
                            : type==="editar-noticia" ? <ModalEditarNoticia onClose={onClose} idNoticia={noticia.id} /> 
                            : type==="deletar-pagina" ? <ModalDeletarPagina onClose={onClose} idPagina={pagina.id} />
                            : type==="adicionar-pagina" ? <ModalAdicionarPagina onClose={onClose}/>
                            : type==="editar-pagina" ? <ModalEditarPagina onClose={onClose} idPagina={pagina.id} />
                            : type==="deletar-pratica" && <ModalDeletarPratica onClose={onClose} idPratica={pratica.id}/>

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