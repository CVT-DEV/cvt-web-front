import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import List from "../components/List"

import { useState, useEffect } from "react";
import { api } from "../services/api";

function PaginasUteis() {
  const [ olimpiadas, setOlimpiadas] = useState([]);
  const [ sites, setSites] = useState([]);

  async function getPaginas () {
          await api.get('/paginas-uteis', {
              headers: {
              },
            })
          .then((response) => {
  
              const olimpiadasBrasileiras = response.data.olimpiadas;
              setOlimpiadas(olimpiadasBrasileiras);

              const sitesRelevantes = response.data.sites;
              setSites(sitesRelevantes);
  
              console.log(response.data);
          })
          .catch((error) => {
              console.log(error);   
            })
      }
  
      useEffect(() => {
          getPaginas();
      }, [])

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Páginas Úteis</h1>
                <Breadcrumb links={ [ { nome: "Páginas Úteis" } ] } />
            </div>
            
              <List paginas={olimpiadas} categoria="Olimpíadas brasileiras de conhecimento"/>
              <List paginas={sites} categoria="Sites relevantes"/>
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

export default PaginasUteis;