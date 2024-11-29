import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavCard from "../components/Cards/NavCard";

function Galeria() {

  return (
    <>
    <div class="column">
      <div class="container-lg" style={styles.containerLg}>
        <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}} >Galeria</h1>
        <Breadcrumb links={[{ nome: "Galeria"}]} />
      </div>
      <div class="d-flex" style={{justifyContent: "center", paddingBottom: "48px"}}>
          <NavCard toPage="true" name="Fotos"/>
          <NavCard toPage="true" name="Vídeos" />
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