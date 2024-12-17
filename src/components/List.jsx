import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function List ({ paginas, categoria }) {
        return (
        <div class="container-lg mb-6">
        
            <div class="br-list" role="list">
            <div class="header">
                <div class="title">{categoria}</div>
            </div><span class="br-divider"></span>

            { paginas.map((item) => {
                return(
                    <>
                    <div class="br-item" role="listitem">
                        <div class="row align-items-center">
                        <div class="col-auto">
                        <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <div class="col">{item.titulo}</div>
                        <Link to={item.url}>
                            <div class="col-auto">VISITAR</div>
                        </Link>
                        </div>
                    </div><span class="br-divider"></span>
                </>
                )
            })}
            </div>
            </div>
            )
}