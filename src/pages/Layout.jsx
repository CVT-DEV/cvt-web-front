import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout (props) {
    return(
        <>
        <div style={styles.pageContainer}>
            <Header notLoggedIn={props.notLoggedIn} />
            <div style={styles.content}>
                <Outlet/>
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