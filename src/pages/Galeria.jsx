import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";

function Galeria() {

  return (
    <>
    <div class="column">
      <div class="container-lg" style={styles.containerLg}>
        <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}} >Galeria</h1>
        <Breadcrumb screenName="Galeria" />
      </div>
      <div class="d-flex" style={{justifyContent: "center", paddingBottom: "48px"}}>
          <Card toPage="true" name="Fotos"/>
          <Card toPage="true" name="Vídeos" />
      </div>
      </div>
    </>
  );
}

const styles = {
  containerLg: {
    display: "flex"
  }
}

export default Galeria;