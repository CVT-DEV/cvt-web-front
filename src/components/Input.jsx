import "@govbr-ds/core/dist/core.min.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Input (props) {
    const [isShow, setIsShow] = useState(false);

    function handlePassword () {
        setIsShow(!isShow);
    }

    return(
        <>
        {
            props.login ? (
                    <div class="col-sm-10 col-lg-8 mb-3">
                    <div class="br-input input-highlight">
                        <label class="sr-only" htmlFor="input-highlight-labeless"></label>
                        {
                            props.name==="senha" ? (
                                <>
                                <input name={props.name} type={ isShow ? "text" : "password" } id="input-highlight-labeless" placeholder={props.placeholder}/>
                                <button class="br-button" type="button" aria-label="Exibir senha" role="switch" aria-checked="false" onClick={handlePassword}>
                                    { 
                                        isShow ? <FontAwesomeIcon icon={faEye} />
                                        : <FontAwesomeIcon icon={faEyeSlash} />
                                    }
                                </button>
                                </>
                            ) : <input name={props.name} type="text" id="input-highlight-labeless" placeholder={props.placeholder}/>
                        }
                    </div>
                </div>
            ) : (
                <div class="col-sm-8 col-lg-5">
                <div class="br-input">
                    <label for="input-default">{props.name}</label>
                    <input id="input-default" type="text" placeholder={props.placeholder}/>
                </div>
                </div>
            )
        }
        </>
    )
}