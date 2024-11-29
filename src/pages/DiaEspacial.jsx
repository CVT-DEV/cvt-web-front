import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function DiaEspacial() {

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Dia Espacial</h1>
                <Breadcrumb links={ [ { nome: "Dia Espacial" } ] } />
            </div>
            </div>
    </>
  );
}

const styles = {
  content: {
      paddingBottom: "48px"
  },
  containerLg: {
    display: "flex",
    alignItems: "center"
  }
}

export default DiaEspacial;