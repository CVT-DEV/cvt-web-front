import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardNoticia from "../components/Cards/CardNoticia"
import Pagination from "../components/Pagination";
import Overlay from "../components/Overlay";

import { api } from "../services/api";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Noticias() {
  const DEFAULT_PAGE = 1;
  const DEFAULT_PAGE_SIZE = 8;

  const [ noticias, setNoticias ] = useState([]);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);
  

  const handlePageChange = (value) => {  
    setCurrentPage(value);  
  };

  const handleNextPage = (value, totalPages) => {
    value < totalPages && setCurrentPage( value + 1 );
  }

  const handlePreviousPage = (value) => {
    value > 1 && setCurrentPage( value - 1 );
  }

  async function getNoticias () {
    await api.get('/noticias', {
      headers: {
          'page': DEFAULT_PAGE * (currentPage - 1),
          'limit': DEFAULT_PAGE_SIZE
      }
  })
    .then((response) => {
      const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
      setTotalPages(totalPages);

        const dados = response.data.noticias;
        setNoticias(dados);

        console.log(dados);
    })
    .catch((error) => {
        console.log(error);   
      })
}

useEffect(() => {
    getNoticias();
}, [currentPage])

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
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Notícias</h1>
                <Breadcrumb links={ [ { nome: "Notícias" } ] } />
                <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                    <FontAwesomeIcon icon={faPlus}/>         
                  <span class="d-sm-inline">Novo</span>
                </button>
            </div>

            <div class="column">
              { noticias.map((item) => (
                <CardNoticia noticia={item}/>
              ))}
            </div>

            <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange} onNext={handleNextPage} onPrev={handlePreviousPage} />
            
            <Overlay isOpen={isModalAdicionarOpen} onClose={closeModalAdicionar} type="adicionar-noticia"/>
            
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

export default Noticias;