import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function Galeria() {

  return (
    <>
    <div class="container-lg" style={{display: "flex"}}>
      <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}} >Galeria</h1>
      <Breadcrumb screenName="Galeria" />
    </div>
    </>
  );
}

export default Galeria;