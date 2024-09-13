import "@govbr-ds/core/dist/core.min.css";

export default function Input (props) {
    return(
        <div class="col-sm-10 col-lg-8 mb-3">
            <div class="br-input input-highlight">
                <label class="sr-only" htmlFor="input-highlight-labeless"></label>
                <input name={props.nome} id="input-highlight-labeless" type="text" placeholder={props.placeholder}/>
            </div>
        </div>
    )
}