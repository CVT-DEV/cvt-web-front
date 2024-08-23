import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Digite sua senha"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
