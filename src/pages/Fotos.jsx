import React from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import Breadcrumb from "../components/Breadcrumb";
import CardFoto from "../components/Cards/CardFoto";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../components/Overlay";

export default function Fotos () {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PAGE_SIZE = 8;
    
    const [ fotos1, setFotos1 ] = useState([]);
    const [ fotos2, setFotos2 ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

    const [ loading, setLoading ] = useState(false);

    const handlePageChange = (value) => {  
      setCurrentPage(value);  
    };

    const handleNextPage = (value, totalPages) => {
      value < totalPages && setCurrentPage( value + 1 );
    }

    const handlePreviousPage = (value) => {
      value > 1 && setCurrentPage( value - 1 );
    }

    async function getFotos (page) {
      setLoading(true);
        await api.get('/fotos', {
            headers: {
              'page': DEFAULT_PAGE * (currentPage - 1),
              'limit': DEFAULT_PAGE_SIZE
            },
          })
        .then((response) => {
            const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
            setTotalPages(totalPages);

            const fotos = response.data.fotos;
            setFotos1(fotos.slice(0, 4));
            setFotos2(fotos.slice(4));

            setLoading(false);

            console.log(fotos);
        })
        .catch((error) => {
          setLoading(false);

            console.log(error);   
          })
    }

    useEffect(() => {
        getFotos(currentPage);
    }, [currentPage])

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
            <Breadcrumb links={[ { nome:"Galeria", link:"/galeria" }, { nome: "Fotos"} ]} />
            <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                <FontAwesomeIcon icon={faPlus}/>         
                <span class="d-sm-inline">Novo</span>
              </button>
        </div>
        
        {loading ? <Loading query={true} /> : 
        <>
          <div class="d-flex">
          { fotos1.map((item) => (
            <CardFoto foto={item}/>
          ))}
        </div>
        <div class="d-flex">
          { fotos2.map((item) => (
            <CardFoto foto={item}/>
          ))}
        </div>

        <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange} onNext={handleNextPage} onPrev={handlePreviousPage} />
        </>}

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