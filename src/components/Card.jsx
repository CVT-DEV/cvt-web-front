import "@govbr-ds/core/dist/core.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";

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
                    <h3 style={styles.h3} class="font-type">{props.name}</h3>
                    </div>
                </div>
                </div>
            ) : (
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="br-card">
                    <div class="card-header">
                        <div class="d-flex">
                            <div class="ml-3">
                            <div class="text-weight-semi-bold text-up-02">Título</div>
                            <div>UX Designer</div>
                            </div>
                            <div class="ml-auto">
                            <button class="br-button circle" type="button" aria-label="Ícone ilustrativo"><i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                    <p>Lorem ipsum doloris sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda.</p>
                    </div>
                    <div class="card-footer">
                    <div class="d-flex">
                        <div>
                        <button class="br-button" type="button">Button
                        </button>
                        </div>
                        <div class="ml-auto">
                        <button class="br-button circle" type="button" aria-label="Ícone ilustrativo"><i class="fas fa-heart" aria-hidden="true"></i>
                        </button>
                        <button class="br-button circle" type="button" aria-label="Ícone ilustrativo 3"><i class="fas fa-share-alt" aria-hidden="true"></i>
                        </button>
                        </div>
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
        margin: "22.5px 25px",
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
    h3: {
        margin:0,
        padding:0
    }

}