import { createContext, useEffect, useState } from "react";
import { LerProdutos } from "../data/fetchProdutos";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [aux, setAux] = useState(0);

  const carregarProdutos = async () => {
    await LerProdutos(setProdutos);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <DataContext.Provider
      value={{
        produtos,
        setProdutos,
        aux,
        setAux,
        carregarProdutos, 
      }}
    >
      {children}
    </DataContext.Provider>
  );
}