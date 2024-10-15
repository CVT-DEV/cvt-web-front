import React from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../components/Overlay";

export default function Fotos () {
    const [ fotos1, setFotos1 ] = useState([]);
    const [ fotos2, setFotos2 ] = useState([]);
    const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);

    const DEFAULT_PAGE = 1;

    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

    const handlePageChange = (value) => {  
      setCurrentPage(value);  
    };
  

    async function getFotos (page) {
        await api.get('/fotos', {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
              'page': DEFAULT_PAGE * (currentPage - 1)
            },
          })
        .then((response) => {
            const fotos = response.data;
            setFotos1(fotos.slice(0, 4));
            setFotos2(fotos.slice(4));
            console.log(fotos);
        })
        .catch((error) => {
            console.log(error);   
          })
    }

    useEffect(() => {
        getFotos(currentPage);
    }, [currentPage])

    const totalPages = 4;

    function openModalAdicionar () {
      setIsModalAdicionarOpen(true);
    }

    function closeModalAdicionar() {
      setIsModalAdicionarOpen(false);
    }

    return(
        <>
        <div class="column" style={styles.content}>
        <div class="container-lg" style={styles.containerLg}>
            <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Fotos</h1>
            <Breadcrumb screenName="Galeria" />
            <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                <FontAwesomeIcon icon={faPlus}/>         
                <span class="d-sm-inline">Novo</span>
              </button>
        </div>
        
        <div class="d-flex">
          { fotos1.map((item) => (
            <Card foto={item}/>
          ))}
        </div>
        <div class="d-flex">
          { fotos2.map((item) => (
            <Card foto={item}/>
          ))}
        </div>

        <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange}/>
        </div>

        <Overlay isOpen={isModalAdicionarOpen} onClose={closeModalAdicionar} type="adicionar-foto"/>
        </>
    )
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