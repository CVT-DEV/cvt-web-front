import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardVideo from "../components/Cards/CardVideo";
import { api } from "../services/api";
import { useState, useEffect } from "react";

export default function Videos() {

    const [videos, setVideos] = useState([]);

    async function getVideos () {
        await api.get("/videos", {
            headers: {
                'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
            }
        })
          .then((response) => {
            setVideos(response.data);
            
            console.log(videos);
          })
          .catch((error) => { 
            console.log(error);   
            }
        );
      }

    /*async function getVideos (setVideos) {
        await api.get('/videos', {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token')
            },
          })
        .then((response) => {
            //const totalPages = Math.ceil( response.data.totalFotos / DEFAULT_PAGE_SIZE);
            //setTotalPages(totalPages);

            const listaVideos = response.data;
            setVideos(listaVideos);

            console.log(videos);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);   
          })
    }*/

    useEffect(() => {
        getVideos();
        },[]);

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Vídeos</h1>
                <Breadcrumb links={ [ { nome: "Galeria", link: "/galeria" },  { nome: "Vídeos" }] } />
            </div>

            <div class="d-flex">
            { videos.map((item) => (
                <CardVideo video={item}/>
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