import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faImages, faNewspaper, faShuttleSpace, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


function Inicio() {

  const navigate = useNavigate();

  function handleClick(page) {
    page = '/' + page;

    navigate(page);
  }

  return (
    <>
      <div style={styles.content}>
        <div style={styles.container}>
          <div style={styles.row}>
            <div style={styles.toPageDiv} onClick={() => handleClick('galeria')}>
              <div style={styles.toPageText}>
                <p style={styles.pageName}>Galeria</p>
              </div>
              <div style={styles.toPageIcon}>
                <FontAwesomeIcon icon={faImages} size="3x" color="var(--blue-warm-vivid-70)"/>         
              </div>
            </div>
            <div style={styles.toPageDiv} onClick={() => handleClick('materiaisDidaticos')}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Materiais Didáticos</p>
              </div>
              <div style={styles.toPageIcon}>
                <FontAwesomeIcon icon={faFileLines} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
            <div style={styles.toPageDiv} onClick={() => handleClick('noticias')}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Notícias</p>
              </div>
              <div style={styles.toPageIcon}>
                  <FontAwesomeIcon icon={faNewspaper} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.toPageDiv} onClick={() => handleClick('paginasUteis')}>
              <div style={styles.toPageText}>
                  <p style={styles.pageName}>Páginas úteis</p>
              </div>
              <div style={styles.toPageIcon}>
                  <FontAwesomeIcon icon={faSquareArrowUpRight} size="3x" color="var(--blue-warm-vivid-70)"/>              
              </div>
            </div>
            <div style={styles.toPageDiv} onClick={() => handleClick('diaEspacial')}>
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
    </>
  );
}

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
  container: {
    width: 884,
    height: 469,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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
    margin: "22.5px 25px",
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    cursor: "pointer"
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
  }
}

export default Inicio;