import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardVideo from "../components/Cards/CardVideo";
import { api } from "../services/api";
import { useState, useEffect } from "react";

export default function Videos() {

    const [videos, setVideos] = useState([]);
    const [ videos1, setVideos1 ] = useState([]);
    const [ videos2, setVideos2 ] = useState([]);

    async function getVideos () {
        await api.get("/videos", {
            headers: {
                'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
            }
        })
          .then((response) => {
            setVideos(response.data);
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
        },[]);

  return (
    <>
        <div class="column" style={styles.content}>
            <div class="container-lg" style={styles.containerLg}>
                <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Vídeos</h1>
                <Breadcrumb links={ [ { nome: "Galeria", link: "/galeria" },  { nome: "Vídeos" }] } />
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