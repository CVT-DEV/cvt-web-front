import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardMaterial from "../components/Cards/CardMateriais";
import Pagination from "../components/Pagination";
import Overlay from "../components/Overlay";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { api } from "../services/api";

function MateriaisDidaticos() {
  const DEFAULT_PAGE = 1;
  const DEFAULT_PAGE_SIZE = 8;

  const [ totalPages, setTotalPages ] = useState(1);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  
  const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);
  const[ materiais1, setMateriais1 ] = useState([]);
  const[ materiais2, setMateriais2 ] = useState([]);

  const handlePageChange = (value) => {  
    setCurrentPage(value);  
  };

  const handleNextPage = (value, totalPages) => {
    value < totalPages && setCurrentPage( value + 1 );
  }

  const handlePreviousPage = (value) => {
    value > 1 && setCurrentPage( value - 1 );
  }

  function openModalAdicionar () {
    setIsModalAdicionarOpen(true);
  }

  function closeModalAdicionar() {
    setIsModalAdicionarOpen(false);
  }

  async function getMateriaisDidaticos () {
    await api.get('/materiais', {
      headers: {
        'page': DEFAULT_PAGE * (currentPage - 1),
        'limit': DEFAULT_PAGE_SIZE
    } 
    })
    .then((response) => {
      const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
      setTotalPages(totalPages);

      const materiais = response.data.materiaisDidaticos;
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
}, [currentPage])

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Materiais Didáticos</h1>
                <Breadcrumb links={ [ { nome: "Materiais Didáticos" } ] } />
                <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                  <FontAwesomeIcon icon={faPlus}/>         
                <span class="d-sm-inline">Novo</span>
              </button>
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

            <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange} onNext={handleNextPage} onPrev={handlePreviousPage} />

            <Overlay isOpen={isModalAdicionarOpen} onClose={closeModalAdicionar} type="adicionar-material"/>

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
export default MateriaisDidaticos;