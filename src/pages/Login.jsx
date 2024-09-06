import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
      <Header/>
    <div>
    </div><div style={{
      position: "absolute",
      left: 198,
      top: 166,
      width: 884,
      height: 548,
      textAlign: "center"
    }}>
        <h2 style={{
          fontFamily: "Rawline",
          fontSize: "34.84",
        }}>CVT-Espacial</h2>

        <h3 style={{
          fontFamily: "Rawline",
          fontSize: "29.3",
          color: "#1351B4"
        }}>Faça seu login</h3>

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

        <button class="br-sign-in small primary mt-3 mt-sm-0 ml-sm-3" type="button">Entrar</button>

        <Footer/>

      </div></>
  );
}

export default Login;