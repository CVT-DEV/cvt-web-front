import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function TelaLogin() {

  const navigate = useNavigate();

  function handleLogin () {
    navigate("/inicio");
  }

  return (
    <>
    <div style={styles.pageContainer}>
        <Header/>
        <div style={styles.content}>
          <h2 style={styles.title}>CVT-Espacial</h2>
          <h3 style={styles.subtitle}>Faça seu login</h3>
          <div style = {styles.inputContainer}>
            <div class="col-sm-10 col-lg-8 mb-3">
              <div class="br-input input-highlight">
                <label class="sr-only" for="input-highlight-labeless"></label>
                <input id="input-highlight-labeless" type="text" placeholder="Insira seu e-mail"/>
              </div>
            </div>
            <div class="col-sm-10 col-lg-8 mb-3">
              <div class="br-input input-highlight">
                <label class="sr-only" for="input-highlight-labeless"></label>
                <input id="input-highlight-labeless" type="text" placeholder="Insira sua senha"/>
              </div>
            </div>
          </div>
          <button onClick={handleLogin} class="br-sign-in small primary mt-3 mt-sm-0 ml-sm-3" type="button">   
            Entrar
          </button>
        </div>
      <div style={styles.footerContainer}>
        <Footer/>
      </div>

      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    position: "relative",
    minHeight: "100vh"
  },
  content: {
    position: "absolute",
    left: 198,
    top: 166,
    width: 884,
    height: 548,
    textAlign: "center",
    paddingbottom: "48px"
  },
  title: {
    fontSize: "var(--font-size-scale-up-05)",
    fontWeight:	"var(--font-weight-regular)",
    lineHeight:	"var(--font-line-height-low)",
    color:	"var(--gray-80)",
    marginBottom:	"var(--spacing-scale-2xh)",
    marginTop: "var(--spacing-scale-3xh)"
  },
  subtitle: {
    fontSize:	"var(--font-size-scale-up-04)",
    fontWeight:	"var(--font-weight-medium)",
    lineHeight:	"var(--font-line-height-low)",
    color: "var(--blue-warm-vivid-70)",
    marginBottom: "var(--spacing-scale-2xh)",
    marginTop: "var(--spacing-scale-3xh)"
  },
  inputContainer: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "center"
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%", 
    height: "48px"
},
}

export default TelaLogin;