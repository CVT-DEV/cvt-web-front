import "@govbr-ds/core/dist/core.min.css";
import { api } from "../../../services/api";

export default function ModalDeletarPratica({ onClose, idPratica }) {

    async function deletarPratica(idPratica) {
        await api.delete(`/praticas/${idPratica}`, {
            headers: {
                'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);   
              })
              window.location.reload();
        onClose();
    }

    return(
        <div>
            <div class="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle">
            <div class="br-modal-header">
                <div class="modal-title" id="modalalerttitle">Deletar prática</div>
                <button class="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="br-modal-body">
                <p>Você tem certeza que deseja deletar essa prática?</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button secondary" type="button" onClick={onClose}>Cancelar
                </button>
                <button class="br-button primary ml-2" type="button" onClick={() => {deletarPratica(idPratica)}}>Deletar
                </button>
            </div>
            </div>
        </div>
    )
}