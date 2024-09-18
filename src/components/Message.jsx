import "@govbr-ds/core/dist/core.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Message (props) {
    return(
        <div class="mb-3"><span class="feedback danger" role="alert">
            <FontAwesomeIcon icon={faTimesCircle} ></FontAwesomeIcon>{props.message}</span>         
        </div>
    )
}