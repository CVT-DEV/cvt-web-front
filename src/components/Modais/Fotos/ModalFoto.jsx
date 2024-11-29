import "@govbr-ds/core/dist/core.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalFoto ({ onClose, foto }) {
    return(
        <>
            <button class="br-button circle" style={styles.buttonClose} type="button" aria-label="Ícone ilustrativo" onClick={onClose} >
                <FontAwesomeIcon icon={faXmark} color="var(--pure-0)"/>
            </button>
            <img alt={foto.titulo} src={foto.urlImagem} style={styles.fotoAumentada}></img>
        </>
    )

}

const styles = {
    fotoAumentada: {
        maxWidth: "90%",
        maxHeight: "90%"
    },
    buttonClose: {
        position: "absolute",
        top: "20px",
        right: "30px",
        background: "none",
        border: "none"
    }
}