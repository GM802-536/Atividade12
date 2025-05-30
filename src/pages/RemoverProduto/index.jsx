import React, {useContext, useState} from 'react';
import { DeletarProduto } from '../../data/fetchProdutos';
import { DataContext } from '../../context/data';

function RemoverProduto() {
  const { carregarProdutos } = useContext(DataContext);
  const [id, setId] = useState(0);


    async function handleSubmit(event) {
      event.preventDefault()
      console.log("ID a deletar:", id);

      try {
        await DeletarProduto(id);
        await carregarProdutos();

      } catch (error) {
        console.error("erro ao deletar produto: ", error);
      }
    }

  return (
    <div className="auth-container">
      <h2>Remover Produto</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Id do produto" required onChange={(e) => setId(Number(e.target.value))} />
        <button type="submit">Remover</button>

      </form>
    </div>
  );
}

export default RemoverProduto;