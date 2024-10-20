import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "@govbr-ds/core/dist/core.min.css";

export default function Pagination ({ totalPages, page, onChange, onNext, onPrev}) {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); 

    return(
        <div style={styles.container}>
            <nav class="br-pagination" aria-label="paginação" data-total="4" data-current="1">
            <ul>
            <li>
                <button class="br-button circle" type="button" data-previous-page="data-previous-page" aria-label="Voltar página" onClick={() => onPrev(page)}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>
                </li>
                {
                    pageNumbers.map((number) => {  
                        
                        const buttonEmphasys = number === page ? "page active" : "page";
                        return(
                            <li>
                                <Link key={number} class={buttonEmphasys} aria-label={'Página' + number} onClick={() => onChange(number)} href="javascript:void(0)">
                                    {number}
                                </Link>
                            </li>
                    )})
                }
                <li>
                <button class="br-button circle" type="button" data-next-page="data-next-page" aria-label="Página seguinte" onClick={() => onNext(page, totalPages)}>
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