import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    

const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Entrar</h2>
      <form className="auth-form">
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" onClick={()=>navigate('/')}>Entrar</button>
        <p className="auth-switch">Não tem uma conta? <a href="/criarlogin">Criar agora</a></p>
      </form>
    </div>
  );
}

export default Login;