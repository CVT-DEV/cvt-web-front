import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faImages, faNewspaper, faRocket, faShuttleSpace, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


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
          <div style={styles.row}>
            <div style={styles.toPageDiv}>
              <div style={styles.toPageText}>
                <p style={styles.pageName}>Galeria</p>
              </div>
              <div style={styles.toPageIcon}>
                <FontAwesomeIcon icon={faImages} size="3x" color="var(--blue-warm-vivid-70)"/>         
              </div>
            </div>
            <div style={styles.toPageDiv}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Materiais Didáticos</p>
              </div>
              <div style={styles.toPageIcon}>
                <FontAwesomeIcon icon={faFileLines} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
            <div style={styles.toPageDiv}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Notícias</p>
              </div>
              <div style={styles.toPageIcon}>
                  <FontAwesomeIcon icon={faNewspaper} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.toPageDiv}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Páginas úteis</p>
              </div>
              <div style={styles.toPageIcon}>
                  <FontAwesomeIcon icon={faSquareArrowUpRight} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
            <div style={styles.toPageDiv}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Dia Espacial</p>
                </div>
                <div style={styles.toPageIcon}>
                  <FontAwesomeIcon icon={faShuttleSpace} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
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
  content: {
    margin: "auto",
    width: 884,
    height: 548,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingbottom: "48px"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  toPageDiv: {
    position: "relative",
    width: 178.73,
    height: 75.06,
    margin: "0 50px 45px 0",
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
  },
  toPageText: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 19.06,
    textAlign: "center"
  },
  toPageIcon: {
    position: "absolute",
    display: "flex",
    top: 0,
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  pageName: {
    fontSize:	"var(--font-size-scale-up-01)",
    fontWeight:	"var(--font-weight-regular)",
    lineHeight:	"var(--font-line-height-low)"
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
},
}

export default Inicio;