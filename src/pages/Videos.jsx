import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardVideo from "../components/Cards/CardVideo";
import Pagination from "../components/Pagination";
import Overlay from "../components/Overlay";

import { api } from "../services/api";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export default function Videos() {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PAGE_SIZE = 8;

    const [ videos1, setVideos1 ] = useState([]);
    const [ videos2, setVideos2 ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ isModalAdicionarOpen, setIsModalAdicionarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

    const handlePageChange = (value) => {  
      setCurrentPage(value);  
    };

    const handleNextPage = (value, totalPages) => {
      value < totalPages && setCurrentPage( value + 1 );
    }

    const handlePreviousPage = (value) => {
      value > 1 && setCurrentPage( value - 1 );
    }

    async function getVideos () {
        await api.get('/videos', {
            headers: {
                'page': DEFAULT_PAGE * (currentPage - 1),
                'limit': DEFAULT_PAGE_SIZE
            }
        })
          .then((response) => {
            const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
            setTotalPages(totalPages);

            const videos = response.data.videos;
            setVideos1(videos.slice(0,4));
            setVideos2(videos.slice(4));

            console.log(videos);
          })
          .catch((error) => { 
            console.log(error);   
            }
        );


      }

    useEffect(() => {
        getVideos();
        }, [currentPage]);

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
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Vídeos</h1>
                <Breadcrumb links={ [ { nome: "Galeria", link: "/galeria" },  { nome: "Vídeos" }] } />
                <button class="br-sign-in primary small" type="button" style={styles.buttonNovo} onClick={openModalAdicionar}>
                  <FontAwesomeIcon icon={faPlus}/>         
                <span class="d-sm-inline">Novo</span>
              </button>
            </div>

            <div class="d-flex">
            { 
            videos1.map((item) => (
                <CardVideo video={item}/>
            ))}
            </div>

            <div class="d-flex">
            { 
              videos2.map((item) => (
                <CardVideo video={item}/>
            ))}
            </div>

            <Pagination page={currentPage} totalPages={totalPages} onChange={handlePageChange} onNext={handleNextPage} onPrev={handlePreviousPage} />

            <Overlay isOpen={isModalAdicionarOpen} onClose={closeModalAdicionar} type="adicionar-video"/>
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