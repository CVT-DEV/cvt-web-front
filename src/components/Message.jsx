import "@govbr-ds/core/dist/core.min.css";

export default function Message (props) {
    return(
        <div class="mb-3"><span class="feedback danger" role="alert">
            <i class="fas fa-times-circle" aria-hidden="true"></i>{props.message}</span>
        </div>
    )
}