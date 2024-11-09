import "@govbr-ds/core/dist/core.min.css";
import ModalSair from "./Modais/ModalSair";
import ModalFoto from "./Modais/ModalFoto";
import ModalDeletarFoto from "./Modais/ModalDeletarFoto";
import ModalAdicionarFoto from "./Modais/ModalAdicionarFoto";
import ModalEditarFoto from "./Modais/ModalEditarFoto";
import ModalAdicionarVideo from "./Modais/Videos/ModalAdicionarVideo";
import ModalDeletarVideo from "./Modais/Videos/ModalDeletarVideo";

export default function Overlay ({ isOpen, onClose, type, foto, video }) {

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
                            : type==="deletar-video" && <ModalDeletarVideo onClose={onClose} idVideo={video.id} />
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