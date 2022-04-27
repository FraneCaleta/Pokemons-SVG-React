/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";
import PokemonItem from "./PokemonItem";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.data.id} pokemon={pokemon.data} />
      ))}
    </div>
  );
};
