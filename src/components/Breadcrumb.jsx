import "@govbr-ds/core/dist/core.min.css";
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Breadcrumb (props) {

    return (
        <nav class="br-breadcrumb" aria-label="Breadcrumbs">
        <ol class="crumb-list" role="list">
            <li class="crumb home"><Link class="br-button circle" to="/inicio"><span class="sr-only">Página inicial</span><FontAwesomeIcon icon={faHome}/></Link></li>
            <li class="crumb" data-active="active"><FontAwesomeIcon icon={faChevronRight}/><span tabindex="0" aria-current="page">{props.screenName}</span>
            </li>
        </ol>
        </nav>
    )
}