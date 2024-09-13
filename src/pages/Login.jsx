import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from "../components/Input";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useState } from "react";

function TelaLogin() {

  const navigate = useNavigate();
  const [ error , setError ] = useState("");

  function handleLogin (e) {

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    
    api.post('/admin/login', formJson)
    .then(function (response) {

      const token = response.headers['x-access-token'];
      localStorage.setItem('@cvtespacial-web/token', token);

      console.log(localStorage.getItem('@cvtespacial-web/token'));

      navigate("/inicio");
    })
    .catch(function (error) {
      console.log(error);
      
      setError("Usuário e/ou senha inválidos.");    
    })
  }

  return (
    <>
    <div style={styles.pageContainer}>
        <Header/>
        <div style={styles.content}>
          <h2 style={styles.title}>CVT-Espacial</h2>
          <h3 style={styles.subtitle}>Faça seu login</h3>

          <form method="post" onSubmit={handleLogin}>
           {error && <Message message={error}/>}
            <div style = {styles.inputContainer}>
              <Input nome="email" placeholder="Insira seu e-mail"/>
              <Input nome="senha" placeholder="Insira sua senha"/>
            </div>
            <button class="br-sign-in small primary mt-3 mt-sm-0 ml-sm-3" type="submit">   
              Entrar
            </button>
          </form>
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
    top: 140,
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