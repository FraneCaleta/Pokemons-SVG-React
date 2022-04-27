/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokemonList } from "./layout/PokemonList";
import Spinner from "./layout/Spinner";
import PokemonItem from "./layout/PokemonItem";

const NUMBER_OF_POKEMONS = 40;
const pokemons = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default function Fetcher() {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState("");
  const [specificPokemons, setSpecificPokemons] = useState([]);
  const [urls, setUrls] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await pokemons.get(``, {
          params: {
            // query param for number of pokemons to be rendered
            limit: NUMBER_OF_POKEMONS,
          },
        });
        setAllData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    let fetchedUrls = "";
    if (allData) {
      fetchedUrls = allData.results.map((link) => link.url);
      setUrls(fetchedUrls);
    }
    if (fetchedUrls) {
      setLoading(true);
      try {
        axios.all(fetchedUrls.map((url) => axios.get(url))).then(
          axios.spread(function (...res) {
            // all requests are now complete
            setSpecificPokemons(res);
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    setLoading(false);
  }, [allData]);

  if (counter == NUMBER_OF_POKEMONS - 1) setCounter(0);

  return (
    <>
      {loading && <Spinner />}
      {specificPokemons.length !== 0 && (
        <div>
          <div className="btn-block text-center">
            <button
              onClick={() => setCounter(counter + 1)}
              className="bg-gray-300 hover:bg-gray-400 text-red-800 font-bold py-2 px-4 rounded-r w-full my-4"
            >
              Highlight Next Pokemon
            </button>
          </div>
          <div className="flex-1 items-center container text-center mb-7 border-8 border-red-600 align-middle">
            <PokemonItem
              key={specificPokemons[counter].data.id}
              pokemon={specificPokemons[counter].data}
            />
          </div>
          <PokemonList pokemons={specificPokemons} />
        </div>
      )}
    </>
  );
}
