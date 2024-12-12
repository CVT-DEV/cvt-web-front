import "@govbr-ds/core/dist/core.min.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faDownload } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Overlay";
import { Link } from "react-router-dom";
import preparaFoto from "../../services/preparaFoto";

export default function CardMaterial (props) {
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
            <div class="col-sm-6 col-md-4 col-lg-3" style={styles.materialCardContainer}>
                <div class="br-card">
                    <div class="card-header">
                        <div class="d-flex" style={styles.dFlex}>
                            <div class="ml-3">
                                <div class="text-weight-semi-bold text-up-02">{props.material.titulo}</div>
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
                    <div class="card-content" style={styles.cardContent}>
                        <Link to={preparaFoto(props.material.arquivo)}>
                        <div class="card-area" style={styles.pdfIcon}>
                                <FontAwesomeIcon icon={faDownload} size="3x" color="var(--blue-warm-vivid-70)"/>
                        </div>
                        </Link>
                    </div>
                </div>

                <Overlay isOpen={isModalDeletarOpen} onClose={closeModalDeletar} type="deletar-material" material={props.material} />
                <Overlay isOpen={isModalEditarOpen} onClose={closeModalEditar} type="editar-material" material={props.material} />

                </div>
        </>
    )
}

const styles = {
    toPageContainer: {
        margin: "16px 16px",
    },
    materialCardContainer: {
        margin: "16px 16px"
    },
    pdfIcon: {
        margin: "16px"
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
    imagemReduzida: {
        cursor: "pointer"
    }

}