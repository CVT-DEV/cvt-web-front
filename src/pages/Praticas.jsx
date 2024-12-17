import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardPratica from "../components/Cards/CardPratica";
import Pagination from "../components/Pagination";

import { api } from "../services/api";

function Praticas() {
  const DEFAULT_PAGE = 1;
  const DEFAULT_PAGE_SIZE = 8;

  const [ totalPages, setTotalPages ] = useState(1);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  
  const [ praticas1, setPraticas1 ] = useState([]);
  const [ praticas2, setPraticas2 ] = useState([]);

  const handlePageChange = (value) => {  
    setCurrentPage(value);  
  };

  const handleNextPage = (value, totalPages) => {
    value < totalPages && setCurrentPage( value + 1 );
  }

  const handlePreviousPage = (value) => {
    value > 1 && setCurrentPage( value - 1 );
  }

   async function getPraticas () {
      await api.get('/praticas', {
        headers: {
          'page': DEFAULT_PAGE * (currentPage - 1),
          'limit': DEFAULT_PAGE_SIZE
      } 
      })
      .then((response) => {
        const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
        setTotalPages(totalPages);
  
        const praticas = response.data.praticas;
        setPraticas1(praticas.slice(0, 4));
        setPraticas2(praticas.slice(4));
  
        console.log(praticas);
      })
      .catch((error) => {
          console.log(error);   
        })
  }
  
  useEffect(() => {
      getPraticas();
  }, [currentPage])

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Práticas</h1>
                <Breadcrumb links={ [ { nome: "Práticas" } ] } />
            </div>

            <div class="d-flex">
              { praticas1.map((item) => (
                <CardPratica pratica={item}/>
              ))}
            </div>
            <div class="d-flex">
              { praticas2.map((item) => (
                <CardPratica pratica={item}/>
              ))}
            </div>

            <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange} onNext={handleNextPage} onPrev={handlePreviousPage} />
            
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