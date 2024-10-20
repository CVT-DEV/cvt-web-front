import "@govbr-ds/core/dist/core.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function NavCard(props) {

    const navigate = useNavigate();

    function handleClick(name) {
        if (name==="Fotos") navigate('/fotos');
        else navigate('/videos');
      }
    
    return(
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
    )
}

const styles = {
    toPageContainer: {
        margin: "16px 16px",
        cursor: "pointer"
    },
    cardHeader: {
        padding: "16px", 
        textAlign: "center"
    },
    text: {
        margin:0,
        padding:0
    },
    cardContent: {
        display: "flex", 
        justifyContent: "center",
        padding: "24px",
    },

}