import "@govbr-ds/core/dist/core.min.css";
import ModalSair from "./Modais/ModalSair";
import ModalFoto from "./Modais/ModalFoto";
import ModalDeletar from "./Modais/ModalDeletar";

export default function Overlay ({ isOpen, onClose, type, foto }) {

    return (
        <>
            {
            isOpen ? (
                <div style={styles.overlay}>
                    <div style={styles.overlayBackground}>
                        {
                            type==="sair" ? <ModalSair onClose={onClose} />
                            : type==="foto" ? <ModalFoto onClose={onClose} foto={foto} />
                            : type==="deletar" && <ModalDeletar onClose={onClose} idFoto={foto.id} />
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