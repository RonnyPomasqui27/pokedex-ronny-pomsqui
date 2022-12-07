import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonDetail from './PokemonDetail';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      // axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => setPokemons(res.data.results))
  }, [])

  const selector = useSelector(state => state.user)
  // console.log(pokemons)
  const [page, setPage] = useState(1);
  const pokemonPerPage = 60;
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;

  const pokemon = pokemons.slice(firstIndex, lastIndex)
  const totalPage = Math.ceil(pokemons.length / pokemonPerPage)

  const pages = []

  for (let i = 1; i <= totalPage; i++) {
    pages.push(i)
  }

  return (
    <>
      <div className="poke-search">
        {/* <div className="search-container">
          <input type="text" placeholder='Search...' />
          <a><i className="fa-solid fa-magnifying-glass"></i></a>
        </div> */}
      </div>
      <div className='pokemon' key={pokemon.name}>
        {
          pokemon.map(pokemon => (
            <div key={pokemon.name}>
            <div className="pokemon-container" >
              <PokemonDetail
                url={pokemon.url}
                id={pokemon}
              />
            </div>
            </div>
          ))
        }
        <div className='page'>
          <a onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          {
            pages.map(number => (
              <a onClick={() => { setPage(number) }}>
                {number}</a>
            ))
          }
          <a
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}><i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </>
  );
};

export default Pokedex;