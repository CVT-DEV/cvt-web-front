import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";


function Inicio() {

  const navigate = useNavigate();

  function navigateGaleria () {
    navigate("/galeria");
  }

  return (
    <>
    <div style={styles.pageContainer}>
      <div style={styles.footerUp}>
        <Header/>
        <div style={styles.content}>
          <h3 style={styles.subtitle}>Tela inicial</h3>
          <div style = {styles.buttonContainer}>
            <button onClick={navigateGaleria} class="br-sign-in small primary mt-3 mt-sm-0 ml-sm-3" type="button">   
              Galeria
            </button>
          </div>
        </div>
      </div>
      <div style={styles.footerContainer}>
        <Footer/>
      </div>

      </div>
    </>
  );
}

const styles = {
  pageContainer: {
      position: "relative", 
      minHeight: "100vh"
  },
  footerUp: {
      paddingbottom: "48px"
  },
  content: {
    position: "absolute",
    left: 198,
    top: 166,
    width: 884,
    height: 548,
    textAlign: "center"
  },
  subtitle: {
    fontSize:	"var(--font-size-scale-up-04)",
    fontWeight:	"var(--font-weight-medium)",
    lineHeight:	"var(--font-line-height-low)",
    color: "var(--blue-warm-vivid-70)",
    marginBottom: "var(--spacing-scale-2xh)",
    marginTop: "var(--spacing-scale-3xh)"
  },
  buttonContainer: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "center"
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%", 
    height: "48px"
},
}

export default Inicio;