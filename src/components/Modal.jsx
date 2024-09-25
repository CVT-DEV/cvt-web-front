import "@govbr-ds/core/dist/core.min.css";
import { useNavigate } from "react-router-dom";

export default function Modal ({ isOpen, onClose }) {
    const navigate = useNavigate();

    function logOut() {
        navigate("/");
        onClose();
    }

    return (
        <>
            {
            isOpen ? (
                <div style={styles.overlay}>
                    <div style={styles.overlayBackground} onClick={onClose}>
                        <div style={styles.modalContainer}>
                            <div class="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle">
                            <div class="br-modal-header">
                                <div class="modal-title" id="modalalerttitle">A sessão será encerrada</div>
                                <button class="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="br-modal-body">
                                <p>Você tem certeza que deseja encerrar sua sessão neste navegador?</p>
                            </div>
                            <div class="br-modal-footer justify-content-end">
                                <button class="br-button secondary" type="button" onClick={onClose}>Cancelar
                                </button>
                                <button class="br-button primary ml-2" type="button" onClick={logOut}>Confirmar
                                </button>
                            </div>
                            </div>
                        </div>
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
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        cursor: "pointer",
        zIndex: 9
    }
}