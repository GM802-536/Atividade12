import React, {useContext, useState} from 'react';
import { DeletarProduto } from '../../data/fetchProdutos';
import { DataContext } from '../../context/data';

function RemoverProduto() {
  const [mensagem, setMensagem] = useState("");
  const { carregarProdutos } = useContext(DataContext);
  const [id, setId] = useState(0);


    async function handleSubmit(event) {
      event.preventDefault()
      console.log("ID a deletar:", id);

      try {
        await DeletarProduto(id);
        await carregarProdutos();
        setMensagem("Produto removido com sucesso!");
        setTimeout(()=> setMensagem(""), 3000);

      } catch (error) {
        console.error("erro ao deletar produto: ", error);
        setMensagem("Erro ao remover produto");
        setTimeout(()=> setMensagem(""), 3000);
      }
    }

  return (
    <div className="auth-container">
      <h2>Remover Produto</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Id do produto" required onChange={(e) => setId(Number(e.target.value))} />
        <button type="submit">Remover</button>

      </form>

      <div className='Mensagem'>
        {mensagem && <h2>{mensagem}</h2>}
      </div>
    </div>
  );
}

export default RemoverProduto;