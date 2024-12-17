import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavCard from "../components/Cards/NavCard";
import LinkCard from "../components/Cards/LinkCard";

function DiaEspacial() {

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Dia Espacial</h1>
                <Breadcrumb links={ [ { nome: "Dia Espacial" } ] } />
            </div>
            <div class="container-lg" style={styles.container}>
              <NavCard name="Práticas"/>
              <LinkCard name="Grafana" link="http://10.33.43.133:3000" />
              <LinkCard name="Node-Red" link="http://10.33.43.133:1880" />
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

export default DiaEspacial;