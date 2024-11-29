import "@govbr-ds/core/dist/core.min.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Overlay";

export default function CardFoto (props) {
    const [ isModalFotoOpen, setIsModalFotoOpen ] = useState(false)
    const [ isModalDeletarOpen, setIsModalDeletarOpen ] = useState(false);
    const [ isModalEditarOpen, setIsModalEditarOpen ] = useState(false);

      function openModalFoto () {
        setIsModalFotoOpen(true);
      }

      function closeModalFoto () {
        setIsModalFotoOpen(false);
      }

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
            <div class="col-sm-6 col-md-4 col-lg-3" style={styles.fotoCardContainer}>
                <div class="br-card">
                    <div class="card-header">
                        <div class="d-flex" style={styles.dFlex}>
                            <div class="ml-3">
                                <div class="text-weight-semi-bold text-up-02">{props.foto.titulo}</div>
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
                        <div class="card-area" style={styles.cardArea} onClick={openModalFoto}>
                            <img alt={props.foto.titulo} src={props.foto.urlImagem} style={styles.imagemReduzida} />
                        </div>
                    </div>
                </div>

                <Overlay isOpen={isModalFotoOpen} onClose={closeModalFoto} type="foto" foto={props.foto} />
                <Overlay isOpen={isModalDeletarOpen} onClose={closeModalDeletar} type="deletar-foto" foto={props.foto} />
                <Overlay isOpen={isModalEditarOpen} onClose={closeModalEditar} type="editar-foto" foto={props.foto} />

                </div>
        </>
    )
}

const styles = {
    toPageContainer: {
        margin: "16px 16px",
    },
    fotoCardContainer: {
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
    imagemReduzida: {
        cursor: "pointer"
    }

}