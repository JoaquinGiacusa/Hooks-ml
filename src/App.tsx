import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function fetchML(search) {
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + search
    );
    const data = await res.json();
    setResults(data.results);
  }

  function handleSearch(search) {
    setSearch(search);
  }

  //useEffect: recibe una funcion como parametro principal que se ejecuta cuando se monta el componente(no funciones async)
  //el segundo parametro es un array de cosas que el useEffect queda escuchando y si cambia la funcion se vuevle a ejecutar
  useEffect(() => {
    if (search) {
      //fetch
      fetchML(search);
    }
  }, [search]);

  return (
    <div>
      <SearchForm onSearch={handleSearch}></SearchForm>
      {results.map((r) => (
        <SearchResultItem
          key={r.title}
          title={r.title}
          price={r.price}
          picture={r.thumbnail}
        />
      ))}
    </div>
  );
}

export { App };
