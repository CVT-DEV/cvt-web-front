import Overlay from './Overlay';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function List ({ paginas, categoria }) {
    const [ isModalDeletarOpen, setIsModalDeletarOpen ] = useState(false);
    const [ isModalEditarOpen, setIsModalEditarOpen ] = useState(false);
    const [ paginaDeletar, setPaginaDeletar ] = useState();

    function openModalDeletar (pagina) {
        setPaginaDeletar(pagina);
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
        return (
        <div class="container-lg mb-6">
        
            <div class="br-list" role="list">
            <div class="header">
                <div class="title">{categoria}</div>
            </div><span class="br-divider"></span>

            { paginas.map((item) => {
                return(
                    <>
                    <div class="br-item" role="listitem">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <FontAwesomeIcon icon={faBookOpen}/>
                            </div>
                            
                            <Link to={item.url}>
                            <div class="col">{item.titulo}</div></Link>
                            <div class="ml-auto">
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={() => {openModalDeletar(item)}}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button class="br-button circle" type="button" aria-label="Ícone ilustrativo" onClick={openModalEditar}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            </div>
                        </div>
                    </div><span class="br-divider"></span>
                </>
                )
            })}
            </div>            

            <Overlay isOpen={isModalDeletarOpen} onClose={closeModalDeletar} type="deletar-pagina" pagina={paginaDeletar} />

            </div>
            )
}