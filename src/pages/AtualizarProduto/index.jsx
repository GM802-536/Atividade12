import React, { useState, useContext } from 'react';
import { AtualizarProduto as atualizarProdutoAPI } from '../../data/fetchProdutos';
import { DataContext } from '../../context/data';

function AtualizarProduto() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { carregarProdutos } = useContext(DataContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await atualizarProdutoAPI(Number(id), nome, parseFloat(valor), imagem);
      await carregarProdutos();
      setMensagem("Produto atualizado com sucesso!");
      setTimeout(() => setMensagem(""), 3000);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      setMensagem("Erro ao atualizar produto.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Atualizar Produto</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id do produto a ser atualizado"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <p>Produto novo:</p>
        <input
          type="text"
          placeholder="Novo nome do produto"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nova imagem do produto"
          required
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço do produto (em Reais)"
          required
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit">Atualizar</button>
      </form>

      <div className='Mensagem'>
        {mensagem && <h2>{mensagem}</h2>}</div>
    </div>
  );
}

export default AtualizarProduto;