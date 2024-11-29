import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardMaterial from "../components/Cards/CardMateriais";
import { api } from "../services/api";

function MateriaisDidaticos() {
  const[ materiais1, setMateriais1 ] = useState([]);
  const[ materiais2, setMateriais2 ] = useState([]);

  async function getMateriaisDidaticos (page) {
    await api.get('/materiais')
    .then((response) => {
        const materiais = response.data;
        setMateriais1(materiais.slice(0, 4));
        setMateriais2(materiais.slice(4));

        console.log(materiais);
    })
    .catch((error) => {
        console.log(error);   
      })
}

useEffect(() => {
    getMateriaisDidaticos();
}, [])
  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Materiais Didáticos</h1>
                <Breadcrumb links={ [ { nome: "Materiais Didáticos" } ] } />
            </div>

            <div class="d-flex">
              { materiais1.map((item) => (
                <CardMaterial material={item}/>
              ))}
            </div>
            <div class="d-flex">
              { materiais2.map((item) => (
                <CardMaterial material={item}/>
              ))}
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
export default MateriaisDidaticos;