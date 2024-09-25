import React from "react";

function DiaEspacial() {

  return (
    <>
        <div style={styles.container}>
          <h3 style={styles.subtitle}>Dia Espacial</h3>
        </div>
    </>
  );
}

const styles = {
  container: {
    width: 884,
    height: 469,
    textAlign: "center"
  },
  subtitle: {
    fontSize:	"var(--font-size-scale-up-04)",
    fontWeight:	"var(--font-weight-medium)",
    lineHeight:	"var(--font-line-height-low)",
    color: "var(--blue-warm-vivid-70)",
    marginBottom: "var(--spacing-scale-2xh)",
    marginTop: "var(--spacing-scale-3xh)"
  }
}

export default DiaEspacial;