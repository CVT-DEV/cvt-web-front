import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import List from "../components/List"
import Overlay from "../components/Overlay";

import { useState, useEffect } from "react";
import { api } from "../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function PaginasUteis() {
  const [ olimpiadas, setOlimpiadas] = useState([]);
  const [ sites, setSites] = useState([]);

  const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);

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

      function openModalAdicionar () {
        setIsModalAdicionarOpen(true);
      }

      function closeModalAdicionar() {
        setIsModalAdicionarOpen(false);
      }

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Páginas Úteis</h1>
                <Breadcrumb links={ [ { nome: "Páginas Úteis" } ] } />
                <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                    <FontAwesomeIcon icon={faPlus}/>         
                  <span class="d-sm-inline">Novo</span>
                </button>
            </div>
            
              <List paginas={olimpiadas} categoria="Olimpíadas brasileiras de conhecimento"/>
              <List paginas={sites} categoria="Sites relevantes"/>

              <Overlay isOpen={isModalAdicionarOpen} onClose={closeModalAdicionar} type="adicionar-pagina"/>
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
  },
  buttonNovo: {
    marginLeft: "auto"
  }
}

export default PaginasUteis;