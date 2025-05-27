import React from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import './styles/style.css';

export default function LayoutProdutos() {
  const navigate = useNavigate();

  return (
    <div className="layout-produtos">
      <div className="sidebar">
        <div className='titulo'>
            <h2>Gerenciar Produtos</h2>
        </div>
        <div className='botoes'>
            <button  onClick={() => navigate('CriarProduto')}>Criar</button>
            <button  onClick={() => navigate('Ver')}>Ver</button>
            <button  onClick={() => navigate('atualizar')}>Atualizar</button>
            <button  onClick={() => navigate('remover')}>Remover</button>
        </div>
      </div>

      <div className="conteudo-principal">
        <Outlet />
      </div>
    </div>
  );
}