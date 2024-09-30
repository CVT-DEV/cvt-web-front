import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "@govbr-ds/core/dist/core.min.css";

export default function Pagination () {
    return(
        <div style={styles.container}>
            <nav class="br-pagination" aria-label="paginação" data-total="4" data-current="1">
            <ul>
                <li>
                <button class="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Voltar página">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>
                </li>
                <li><a class="page active" aria-label="Página 1" href="javascript:void(0)">1</a></li>
                <li><a class="page" aria-label="Página 2" href="javascript:void(0)">2</a></li>
                <li><a class="page" aria-label="Página 3" href="javascript:void(0)">3</a></li>
                <li><a class="page" aria-label="Página 4" href="javascript:void(0)">4</a></li>
                <li>
                <button class="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte">
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
                </li>
            </ul>
            </nav>
        </div>
    )
}

const styles = {
    container: {
        paddingBottom: "48px"
    }
}