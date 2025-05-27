import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../../pages/outlet/Layout"
import Produtos from "../../pages/Produtos/PaginaProdutos";
import Login from "../../pages/Login";
import CriarLogin from "../../pages/CriarLogin";
import PrivateRoute from "./PrivateRoute";
import CriarProduto from "../../pages/criarProduto";
import AtualizarProduto from "../../pages/AtualizarProduto";
import RemoverProduto from "../../pages/RemoverProduto";

export default function Routers() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/criarlogin" element={<CriarLogin />} />

      {/* Rotas protegidas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="criarproduto" element={<CriarProduto />} />
        <Route path="ver" element={<Produtos />} />
        <Route path="atualizar" element={<AtualizarProduto />} />
        <Route path="remover" element={<RemoverProduto />} />
      </Route>
    </Routes>
  );
}
