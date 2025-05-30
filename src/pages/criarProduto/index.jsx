import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CriarProduto as criarProdutoAPI } from '../../data/fetchProdutos'; // ajuste o caminho
import { DataContext } from "../../context/data";

function CriarProduto() {
  const[mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const { carregarProdutos } = useContext(DataContext);

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [valor, setValor] = useState('');

  async function handleSubmit(event) {
    event.preventDefault(); // evita reload da página
    try {
      await criarProdutoAPI(nome, parseFloat(valor), imagem);
      await carregarProdutos();
      setMensagem("Produto incluido com sucesso!");
      setTimeout(()=> setMensagem(""), 3000);

    } catch (error) {
      console.error("Erro ao criar produto", error);
      setMensagem("Erro ao criar produto");
      setTimeout(()=> setMensagem(""), 3000);
    }
  }

  return (
    <div className="auth-container">
      <h2>Criar Produto</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagem do produto"
          required
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço do produto (Em Reais)"
          required
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          step="0.01"
          min="0"
        />
        <button type="submit">Criar</button>
      </form>

      <div className='Mensagem'>
        {mensagem && <h2>{mensagem}</h2>}
      </div>
    </div>
  );
}

export default CriarProduto;
