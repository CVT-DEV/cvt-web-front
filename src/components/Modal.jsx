import "@govbr-ds/core/dist/core.min.css";

export default function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <>
            <div class="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle">
            <div class="br-modal-header">
                <div class="modal-title" id="modalalerttitle">A sessão será encerrada</div>
                <button class="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="br-modal-body">
                <p>Você tem certeza que deseja encerrar sua sessão neste navegador?</p>
            </div>
            <div class="br-modal-footer justify-content-end">
                <button class="br-button secondary" type="button">Cancelar
                </button>
                <button class="br-button primary ml-2" type="button">Confirmar
                </button>
            </div>
            </div>
        </>
    )
}