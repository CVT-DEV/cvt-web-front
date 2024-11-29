import "@govbr-ds/core/dist/core.min.css";
import Input from "../../../components/Input"
import { api } from "../../../services/api";

export default function ModalAdicionarVideo({ onClose }) {

    async function adicionarVideo(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        await api.post('/videos', formJson, {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
              'Content-Type': 'multipart/form-data'
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
                <div class="modal-title" id="modalalerttitle">Adicionar vídeo</div>
                <button class="br-button close circle" type="button" data-dismiss="br-modal" aria-label="Fechar"><i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <form onSubmit={adicionarVideo}>
                <div class="br-modal-body" style={styles.modalBody}>
                    <Input name="titulo" titulo="Título" placeholder="Título" />
                    <Input name="url" titulo="URL do vídeo" placeholder="Ex.: https://www.xxxxxxx.xxx" />
                    <Input name="image" titulo="Imagem" placeholder="Faça o upload da imagem aqui" file={true} required/>
                    <Input name="categoria" titulo="Categoria" placeholder="Categoria" />
                    <Input name="fonte" titulo="fonte" placeholder="Fonte" />
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