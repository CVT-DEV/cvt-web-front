import "@govbr-ds/core/dist/core.min.css";
import logoCvtBranco from "../assets/logo-cvt-branco.png"
import logoAebBranco from "../assets/logo-aeb-branco.png";
import lofoIFRNBranco from "../assets/logo-ifrn-branco.png"

function Footer (props) {
    return (
        <>
        { 
            props.notLoggedIn ? (
            <footer class="br-footer">
                <div class="container-lg">
                    <div style={styles.logosContainer}>
                        <div class="logo"><img src={logoCvtBranco} alt="Logo do CVT-E na cor branca."/></div>
                        <div class="logo"><img src={logoAebBranco} alt="Logo da AEB na cor branca."/></div>
                        <div class="logo"><img src={lofoIFRNBranco} alt="Logo do IFRN na cor branca."/></div>
                    </div> 
                </div>
                <span class="br-divider my-3"></span>
                <div class="container-lg">
                    <div class="info">
                    <div class="text-down-01 text-medium pb-3">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
                    </div>
                </div>
            </footer>
        ) : (
            <footer class="br-footer no-divider">
            <span class="br-divider my-3"></span>
            <div class="container-lg">
                <div class="info">
                <div class="text-down-01 text-medium pb-3">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
                </div>
            </div>
            </footer>
        )
        }
        </>
    )
}

const styles = {
    logosContainer: {
        display: "flex",
        justifyContent: "space-around"
    }
}

export default Footer;