import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function Praticas() {

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Práticas</h1>
                <Breadcrumb links={ [ { nome: "Práticas" } ] } />
            </div>
            </div>
    </>
  );
}

const styles = {
  content: {
      paddingBottom: "48px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
},
  containerLg: {
    display: "flex",
    alignItems: "center"
  }
}

export default Praticas;