import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardNoticia () {
    
    const [ isModalDeletarOpen, setIsModalDeletarOpen ] = useState(false);
    const [ isModalEditarOpen, setIsModalEditarOpen ] = useState(false);

    function openModalDeletar () {
        setIsModalDeletarOpen(true);
      }

    function openModalEditar() {
        setIsModalEditarOpen(true);
      }

    return (
    <div class="row">
        <div class="col-md">
        <div class="br-card hover" style={{margin: "0 var(--spacing-scale-5x) var(--spacing-scale-5x)"}}>
        <div style={styles.row}>
            <div>
                <div class="card-header">
                    <div class="d-flex">
                        <div class="ml-3">
                            <div class="text-weight-semi-bold text-up-02">Título</div>
                            <div>Subtítulo</div>
                        </div>
                            <div class="ml-auto">
                            <button class="br-button circle" type="button" aria-label="Ícone ilustrativo"><i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-content" tabindex="0">
                </div>
                <div class="card-footer">
                    <div class="d-flex">
                        <div>
                            <div class="text-weight-regular text-up-02" style={{marginLeft: "var(--spacing-scale-2x)", color: "#555555"}}>XX/XX/XXXX XXhXX</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ml-auto" style={styles.row}>
                <div class="mb-6">
                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={openModalDeletar}>
                        <FontAwesomeIcon icon={faTrash} color="var(--blue-warm-vivid-70)"/>
                    </button>
                    <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={openModalEditar}>
                        <FontAwesomeIcon icon={faPenToSquare} color="var(--blue-warm-vivid-70)"/>
                    </button>
                </div>
                <img style={styles.imagem} alt="Imagem da notícia" src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"></img>
            </div>
        </div>
        </div>
        </div>
    </div>
 )
}

const styles = {
    
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imagem: {
    margin: "var(--spacing-scale-5x)",
    maxWidth: "128px",
    maxHeight: "108px",
    width: "auto",
    height: "auto"
  }
}