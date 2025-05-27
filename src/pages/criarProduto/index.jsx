import React from 'react';


function CriarProduto() {

  return (
    <div className="auth-container">
      <h2>Criar Produto</h2>
      <form className="auth-form">
        <input type="text" placeholder="Nome do produto" required />
        <input type="password" placeholder="Imagem do produto" required />
        <input type="number" placeholder="Preço do produto (Em Reais)" required />
        <button type="submit" onClick={()=> navigate('/login')}>Criar</button>

      </form>
    </div>
  );
}

export default CriarProduto;