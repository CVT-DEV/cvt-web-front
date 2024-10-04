import "@govbr-ds/core/dist/core.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPenToSquare, faTrash, faVideo } from "@fortawesome/free-solid-svg-icons";
import Overlay from "./Overlay";

export default function Card (props) {
    const navigate = useNavigate();
    const [ isModalFotoOpen, setIsModalFotoOpen ] = useState(false)
    const [ isModalDeletarOpen, setIsModalDeletarOpen ] = useState(false);

    function handleClick(name) {
        if (name==="Fotos") navigate('/fotos');
        else navigate('/videos');
      }

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

    return(
        <>
        {
            props.toPage ? (
                <div class="col-sm-6 col-md-4 col-lg-3" style={styles.toPageContainer} onClick={() => handleClick(props.name)}>
                <div class="br-card">
                    <div class="card-content" style={styles.cardContent}>
                    <FontAwesomeIcon 
                        icon={ props.name==="Fotos" ? (faCamera) : (faVideo) } 
                        size="6x" 
                        color="var(--blue-warm-vivid-70)"
                        />
                    </div>
                    <div class="card-header" style={styles.cardHeader}>
                    <h3 style={styles.text} class="font-type">{props.name}</h3>
                    </div>
                </div>
                </div>
            ) : (
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
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo">
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
                <Overlay isOpen={isModalDeletarOpen} onClose={closeModalDeletar} type="deletar" foto={props.foto} />

                </div>
                )
        }
        </>
    )
}

const styles = {
    toPageContainer: {
        margin: "16px 16px",
        cursor: "pointer"
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