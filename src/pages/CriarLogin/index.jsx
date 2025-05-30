import React from 'react';
import '../Login/style.css'; 
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Criar Conta</h2>
      <form className="auth-form">
        <input type="text" placeholder="Nome completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <input type="password" placeholder="Confirmar senha" required />
        <button type="submit" onClick={()=> navigate('/login')}>Cadastrar</button>
        <p className="auth-switch">Já tem conta? <a href="/login">Entrar</a></p>
      </form>
    </div>
  );
}

export default CreateAccount;