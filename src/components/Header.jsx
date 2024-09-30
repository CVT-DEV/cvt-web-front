import "@govbr-ds/core/dist/core.min.css";
import logoCvt from "../assets/logo-cvt-azul.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

  return (
    <header class="br-header">
      <div class="container-lg">
        <div class="header-top">
          <div class="header-logo">
            <img
              src={logoCvt}
              alt="logo"
            />
            <span class="br-divider vertical"></span>
            <div class="header-sign">Agência Espacial Brasileira</div>
          </div>
        </div>
        { !props.notLoggedIn && (
        <div class="header-actions">
          <div class="header-login">
            <div class="header-sign-in">
              <button class="br-sign-in primary small" type="button" data-trigger="login" onClick={props.openModal}>
                <FontAwesomeIcon icon={faRightFromBracket}/>         
                <span class="d-sm-inline">Sair</span>
              </button>
            </div>
            <div class="header-avatar"></div>
          </div>
        </div>
      ) }
        <div class="header-bottom">
          <div class="header-menu">
            <div class="header-menu-trigger">
              <button
                class="br-button small circle"
                type="button"
                aria-label="Menu"
                data-toggle="menu"
                data-target="#main-navigation"
                id="navigation"
              >
                <i class="fas fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div class="header-info">
              <div class="header-title">CVT-Espacial</div>
              <div class="header-subtitle">Para administradores</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
