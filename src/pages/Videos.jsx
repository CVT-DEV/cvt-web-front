import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { api } from "../services/api";
import { useState, useEffect } from "react";
import CardVideo from "../components/Cards/CardVideo";

export default function Videos() {

    const [ fotos1, setFotos1 ] = useState([]);
    const [ fotos2, setFotos2 ] = useState([]);

    //const [ videos1, setVideos1 ] = useState([]);
    //const [ videos2, setVideos2 ] = useState([]);

    let videos = []

    async function getVideos () {
        await api.get('/videos', {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token')
            },
          })
        .then((response) => {
            //const totalPages = Math.ceil( response.data.totalFotos / DEFAULT_PAGE_SIZE);
            //setTotalPages(totalPages);

            const videos = response.data;
            console.log(videos);
        })
        .catch((error) => {
            console.log(error);   
          })
    }

    useEffect(() => {
        getVideos();
    },[])

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Vídeos</h1>
                <Breadcrumb links={ [ { nome: "Galeria", link: "/galeria" },  { nome: "Vídeos" }] } />
            </div>

            <div class="d-flex">
                <CardVideo/>
                <CardVideo/>
                <CardVideo/>
                <CardVideo/>
            </div>
            <div class="d-flex">
                <CardVideo/>
                <CardVideo/>
                <CardVideo/>
                <CardVideo/>
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