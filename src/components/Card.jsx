import "@govbr-ds/core/dist/core.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPenToSquare, faTrash, faVideo } from "@fortawesome/free-solid-svg-icons";
import alunosCvte from "../assets/alunos-cvt.png"

export default function Card (props) {
    const navigate = useNavigate();

    function handleClick(name) {
        if (name==="Fotos") navigate('/fotos');
        else navigate('/videos');
      }

    return(
        <>
        {
            props.toPage ? (
                <div class="col-sm-6 col-md-4 col-lg-3" style={styles.cardContainer} onClick={() => handleClick(props.name)}>
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
            <div class="col-sm-6 col-md-4 col-lg-3" style={styles.cardContainer}>
                <div class="br-card">
                    <div class="card-header">
                        <div class="d-flex" style={styles.dFlex}>
                            <div class="ml-3">
                                <div class="text-weight-semi-bold text-up-02">{props.foto.titulo}</div>
                            </div>
                            <div class="ml-auto">
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo">
                                    <FontAwesomeIcon icon={faTrash} color="var(--blue-warm-vivid-70)"/>
                                </button>
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo">
                                    <FontAwesomeIcon icon={faPenToSquare} color="var(--blue-warm-vivid-70)"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-area">
                            <img alt="alunos no CVT-E." src={props.foto.urlImagem}/>
                        </div>
                    </div>
                </div>
                </div>
                )
        }
        </>
    )
}

const styles = {
    cardContainer: {
        margin: "16px 16px",
        cursor: "pointer"
    },
    cardContent: {
        display: "flex", 
        justifyContent: "center", 
        padding: "24px"
    },
    cardHeader: {
        padding: "16px", 
        textAlign: "center"
    },
    dFlex: {
        alignItems: "center"
    },
    text: {
        margin:0,
        padding:0
    }

}