import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Overlay from "../Overlay";

export default function CardNoticia ({ noticia }) {
    
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

    return (
    <div class="row">
        <div class="col-md">
            <div class="br-card hover" style={{margin: "0 var(--spacing-scale-5x) var(--spacing-scale-2x)"}}>
                <div style={styles.row}>
                    <div>
                        <Link to={noticia.urlTexto}>
                        <div class="card-header">
                            <div class="d-flex">
                                <div class="ml-3">
                                    <div class="text-weight-semi-bold text-up-02" style={{color: "#0C326F"}}>{noticia.titulo}</div>
                                    <div style={{color: "#555555"}}>{noticia.fonte}</div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <div class="card-content" tabindex="0">
                        </div>
                        <div class="card-footer">
                            <div class="d-flex">
                                <div>
                                    <div class="text-weight-regular text-up-01" style={{marginLeft: "var(--spacing-scale-2x)", color: "#555555"}}>{noticia.dataPublicacao} {noticia.horaPublicacao}</div>
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
                        <img style={styles.imagem} alt="Imagem da notícia" src={noticia.urlImagem}></img>
                    </div>
                </div>
            </div>

        <Overlay isOpen={isModalDeletarOpen} onClose={closeModalDeletar} type="deletar-noticia" noticia={noticia}/>
        
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