import React from 'react';


function RemoverProduto() {

  return (
    <div className="auth-container">
      <h2>Remover Produto</h2>
      <form className="auth-form">
        <input type="text" placeholder="Id do produto" required />
        <button type="submit" onClick={()=> navigate('/login')}>Remover</button>

      </form>
    </div>
  );
}

export default RemoverProduto;