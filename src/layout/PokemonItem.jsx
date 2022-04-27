/* eslint-disable no-unused-vars */
import React from "react";

function PokemonItem({ pokemon }) {
  const colors = {
    fire: "#f72585",
    grass: "#DEFDE0",
    electric: "#ffb703",
    water: "#4cc9f0",
    ground: "#cb997e",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#bdb2ff",
    bug: "#f8d5a3",
    dragon: "#ae2012",
    psychic: "#f1c0e8",
    flying: "#94d2bd",
    fighting: "#84a59d",
    normal: "#f5cac3",
  };
  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const type = pokemonTypes.length > 0 ? pokemonTypes[0] : "normal";

  const { name, sprites } = pokemon;
  const pokemonName = name[0].toUpperCase() + name.slice(1);

  let abilities = pokemon.abilities.map((ability, id) => {
    return <li key={id}>{ability.ability.name}</li>;
  });

  return (
    <>
      <div
        style={{ backgroundColor: `${colors[type]}` }}
        className={`card shadow-md compact side`}
      >
        <div className="bgflex-row items-center space-x-4 card-body">
          <div className="rounded-full shadow">
            <img
              width="100px"
              height="100px"
              src={sprites.front_default}
              alt={pokemonName}
            />
          </div>
          <div>
            <h2 className="card-title">{pokemonName}</h2>
            <hr className="my-2" />
            <p className="text-left">
              <strong>Abilities:</strong>
            </p>
            <ul className="table mx-0 my-auto list-disc ml-4">{abilities}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonItem;
