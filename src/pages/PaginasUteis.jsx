import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

function PaginasUteis() {

  return (
    <>
    <div style={styles.pageContainer}>
        <Header/>
        <div style={styles.content}>
          <h3 style={styles.subtitle}>Págins Úteis</h3>
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
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%", 
    height: "48px"
},
}

export default PaginasUteis;