
import "@govbr-ds/core/dist/core.min.css";
import logoCvt from "../logo-cvt-azul.png";

function Header() {
  return (
    <header class="br-header" style={
      { 
        width: 1227, 
        height: 145, 
        left: 26, 
        top: 31 }}>
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
