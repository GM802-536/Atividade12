import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CriarProduto as criarProdutoAPI } from '../../data/fetchProdutos'; // ajuste o caminho
import { DataContext } from "../../context/data";

function CriarProduto() {
  const navigate = useNavigate();
  const { carregarProdutos } = useContext(DataContext);

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [valor, setValor] = useState('');

  async function handleSubmit(event) {
    event.preventDefault(); // evita reload da página
    try {
      await criarProdutoAPI(nome, parseFloat(valor), imagem);
      // após criar o produto, navega para página de produtos
      await carregarProdutos();
    } catch (error) {
      console.error("Erro ao criar produto", error);
      // aqui você pode mostrar mensagem para usuário
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
    </div>
  );
}

export default CriarProduto;
