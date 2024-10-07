import "@govbr-ds/core/dist/core.min.css";
import Input from "../../components/Input"
import { api } from "../../services/api";

export default function ModalAdicionarFoto({ onClose }) {

    async function adicionarFoto(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        await api.post('/fotos', formJson, {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
            },
          })
        .then((response) => {
            console.log(response);
            onClose();
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);   
          })

    }

    return(
        <div class="div br-modal medium" aria-modal="true" role="dialog" aria-labelledby="modalalerttitle">
            <div class="br-modal-header">
                <div class="modal-title" id="modalalerttitle">Adicionar foto</div>
                <button class="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <form method="post" onSubmit={adicionarFoto}>
                <div class="br-modal-body" style={styles.modalBody}>
                    <Input name="titulo" titulo="Título" placeholder="Título" />
                    <Input name="urlImagem" titulo="URL da imagem" placeholder="Ex.: https://www.xxxxxxx.xxx" />
                    <Input name="fonte" titulo="Fonte" placeholder="Fonte" />
                </div>
                <div class="br-modal-footer justify-content-end">
                    <button class="br-button secondary" type="button" onClick={onClose}>Cancelar
                    </button>
                    <button class="br-button primary ml-2" type="submit">Adicionar
                    </button>
                </div>
            </form>
        </div>
    )
}

const styles = {
    modalBody: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}