import React from "react";
import { Boton } from "./Boton";
import { TextField } from "./TextField";

export function SearchForm({ onSearch }) {
  function handleSearch(e) {
    e.preventDefault();
    if (onSearch) {
      const search = e.target.search.value;
      onSearch(search);
    }
  }

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <TextField inputType="text" inputName="search" />
      <Boton>Buscar</Boton>
    </form>
  );
}
