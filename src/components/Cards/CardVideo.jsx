import "@govbr-ds/core/dist/core.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Overlay";
import preparaFoto from "../../services/preparaFoto"

export default function CardVideo ({ video }) {
    const [ isModalDeletarOpen, setIsModalDeletarOpen ] = useState(false);
    const [ isModalEditarOpen, setIsModalEditarOpen ] = useState(false);

      function openModalDeletar () {
        setIsModalDeletarOpen(true);
      }

      function closeModalDeletar () {
        setIsModalDeletarOpen(false);
      }

      function openModalEditar() {
        setIsModalEditarOpen(true);
      }

      function closeModalEditar() {
        setIsModalEditarOpen(false);
      }

    return(
        <>
            <div class="col-sm-6 col-md-4 col-lg-3" style={styles.videoCardContainer}>
                <div class="br-card">
                    <div class="card-header">
                        <div class="d-flex" style={styles.dFlex}>
                            <div class="ml-3">
                                <div class="text-weight-semi-bold text-up-02">{video.titulo}</div>
                            </div>
                            <div class="ml-auto">
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={openModalDeletar}>
                                    <FontAwesomeIcon icon={faTrash} color="var(--blue-warm-vivid-70)"/>
                                </button>
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={openModalEditar}>
                                    <FontAwesomeIcon icon={faPenToSquare} color="var(--blue-warm-vivid-70)"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-area" style={styles.cardArea}>
                            <Link to={video.url}>
                            <img alt={video.titulo} src={preparaFoto(video.imagem)} style={styles.imagem} />
                            </Link>
                        </div>
                    </div>
                </div>

                </div>
        </>
    )
}

const styles = {
    toPageContainer: {
        margin: "16px 16px"
    },
    videoCardContainer: {
        margin: "16px 16px"
    },
    cardHeader: {
        padding: "16px", 
        textAlign: "center"
    },
    text: {
        margin:0,
        padding:0
    },
    dFlex: {
        alignItems: "center"
    },
    cardContent: {
        display: "flex", 
        justifyContent: "center",
        padding: "24px",
    },
    imagem: {
        cursor: "pointer"
    }

}