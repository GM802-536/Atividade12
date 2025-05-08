import React from "react";
import { Route, Routes } from "react-router";
import Produtos from "../../pages/Produtos/PaginaProdutos";
import Login from "../../pages/Login";
import CriarLogin from "../../pages/CriarLogin";

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Produtos />}
      />
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path = "/criarlogin"
        element={<CriarLogin />}
      />
    </Routes>
  );
}
