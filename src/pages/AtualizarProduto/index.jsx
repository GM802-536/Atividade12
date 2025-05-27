import React from 'react';


function AtualizarProduto() {

  return (
    <div className="auth-container">
      <h2>Atulizar Produto</h2>
      <form className="auth-form">
        <input type="text" placeholder="Id do produto a ser atualizado" required />
        <p>Produto novo:</p>
        <input type="password" placeholder="Novo nome do produto" required />
        <input type="password" placeholder="Nova imagem do produto" required />
        <input type="number" placeholder="Preço do produto (Em Reais)" required />
        <button type="submit" onClick={()=> navigate('/login')}>Atualizar</button>

      </form>
    </div>
  );
}

export default AtualizarProduto;