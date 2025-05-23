import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // ajuste o caminho conforme seu projeto

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    login(); // autentica o usuário sem validar
    navigate('/'); // redireciona para a rota privada
  }

  return (
    <div className="auth-container">
      <h2>Entrar</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <p className="auth-switch">
          Não tem uma conta? <a href="/criarlogin">Criar agora</a>
        </p>
      </form>
    </div>
  );
}

export default Login;