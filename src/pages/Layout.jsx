import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";

export default function Layout (props) {
    const [isModalSairOpen, setisModalSairOpen] = useState(false);

    const openModal = () => {
      setisModalSairOpen(true);
    };
  
    const closeModal = () => {
      setisModalSairOpen(false);
    };

    return(
        <>
        <div style={styles.pageContainer}>
            <Header notLoggedIn={props.notLoggedIn} openModal={openModal} closeModal={closeModal} />
                <Outlet/>
                <Overlay isOpen={isModalSairOpen} onClose={closeModal} type="sair" />
            <div style={styles.footerContainer}>
                <Footer notLoggedIn={props.notLoggedIn} />
            </div>
        </div>
        </>
    )
}

const styles = {
    pageContainer: {
        position: "relative", 
        minHeight: "100vh"
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    footerContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%", 
        height: "48px"
    }   
}