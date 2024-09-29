import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Fotos () {
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
        
        <div class="d-flex" style={styles.dFlex}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div class="d-flex" style={styles.dFlex}>
            <Card />
            <Card />
            <Card />
            <Card />
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
    dFlex: {
        display: "flex",
        justifyContent: "space-around"
    },
    buttonNovo: {
        marginLeft: "auto"
    }
  }