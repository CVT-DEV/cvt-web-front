import "@govbr-ds/core/dist/core.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Overlay";

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
                                <div class="text-weight-semi-bold text-up-02">Centro Vocacional Tecnológico Espacial (CVT Espacial) - Viva Ciência ep.01</div>
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
                            <Link to="https://youtu.be/aPc3t6luIAI?si=fmlGxta4H4W7Hvl">
                            <img alt="Descrição da imagem" src="https://www.gov.br/aeb/pt-br/acoes-e-programas/centro-vocacional-tecnologico-espacial/centro-vocacional-tecnologico-espacia/@@collective.cover.banner/ad4b3ada-0330-485c-86aa-55e3745c3adb/@@images/59157f7e-3979-4bec-9b64-e1ed514e4443.jpeg" style={styles.imagem} />
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