import React from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Fotos () {
    const [ fotos, setFotos ] = useState([]);

    async function getFotos () {
        await api.get('/fotos', {
            headers: {
              'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
            },
          })
        .then((response) => {
            console.log(response.data);
            setFotos(response.data);
        })
        .catch((error) => {
            console.log(error);   
          })
    }

    useEffect(() => {
        getFotos();
    }, [])

    return(
        <>
        <div class="column" style={styles.content}>
        <div class="container-lg" style={styles.containerLg}>
            <h1 class="font-type" style={{margin: "var(--spacing-scale-3x) 0 var(--spacing-scale-5x)"}}>Fotos</h1>
            <Breadcrumb screenName="Galeria" />
            <button class="br-sign-in primary small" type="button" style={styles.buttonNovo}>
                <FontAwesomeIcon icon={faPlus}/>         
                <span class="d-sm-inline">Novo</span>
              </button>
        </div>
        
        <div class="d-grid">
        {fotos.map((item) => (
          <Card foto={item}/>
        ))}
        </div>

        <Pagination/>
        </div>
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
    dGrid: {
        display: "grid"
    },
    buttonNovo: {
        marginLeft: "auto"
    }
  }