import "@govbr-ds/core/dist/core.min.css";
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Breadcrumb (props) {

    return (
        <nav class="br-breadcrumb" aria-label="Breadcrumbs">
        <ol class="crumb-list" role="list">
            <li class="crumb home"><Link class="br-button circle" to="/inicio"><span class="sr-only">Página inicial</span><FontAwesomeIcon icon={faHome}/></Link></li>
            {
                 props.links && props.links.map((item) => (
                    <li class="crumb">
                        <FontAwesomeIcon icon={faChevronRight}/><Link to={item.link} >{item.nome}</Link>
                    </li>
                  ))
            }
            
        </ol>
        </nav>
    )
}