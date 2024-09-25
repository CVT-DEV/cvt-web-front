import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Layout (props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <>
        <div style={styles.pageContainer}>
            <Header notLoggedIn={props.notLoggedIn} openModal={openModal} closeModal={closeModal} />
            <div style={styles.content}>
                <Outlet/>
                <Modal isOpen={isModalOpen} onClose={closeModal}/>
            </div>
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