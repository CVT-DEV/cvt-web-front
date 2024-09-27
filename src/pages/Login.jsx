import React from "react";
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
        <div style={styles.container}>
          <h2 style={styles.title}>CVT-Espacial</h2>
          <h3 style={styles.subtitle}>Faça seu login</h3>

          <form method="post" onSubmit={handleLogin}>
           {error && <Message message={error}/>}
            <div style = {styles.inputContainer}>
              <Input name="email" placeholder="Insira seu e-mail"/>
              <Input name="senha" placeholder="Insira sua senha"/>
            </div>
            <button class="br-sign-in small primary mt-3 mt-sm-0 ml-sm-3" type="submit">   
              Entrar
            </button>
          </form>
        </div>
    </>
  );
}

const styles = {
  container: {
    width: 884,
    textAlign: "center"
  },
  title: {
    fontSize: "var(--font-size-scale-up-05)",
    fontWeight:	"var(--font-weight-regular)",
    lineHeight:	"var(--font-line-height-low)",
    color:	"var(--gray-80)",
    marginBottom:	0,
    marginTop: "var(--spacing-scale-3xh)"
  },
  subtitle: {
    fontSize:	"var(--font-size-scale-up-04)",
    fontWeight:	"var(--font-weight-medium)",
    lineHeight:	"var(--font-line-height-low)",
    color: "var(--blue-warm-vivid-70)",
    marginBottom: "var(--spacing-scale-2xh)",
    marginTop: 0
  },
  inputContainer: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "center"
  }
}

export default TelaLogin;