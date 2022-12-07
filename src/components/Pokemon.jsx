import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Pokemon = ({ infoPokemon, id }) => {

  const [info, setInfo] = useState([])
  const selector = useSelector(state => state.user)
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${selector}/`)
      .then(res => setInfo(res.data))
  }, [])

  return (
    <>
      <div className='statistics'>
        <div className="imagen-poke">
          <div className="imagen-ralla"></div>
          <div className="imigen">
            <img src={info.sprites?.other['official-artwork']?.front_default} alt="" />
          </div>
        </div>
        <div className="change-container">
          <div className="name-pokemon">
            <p><b>Name:</b> {info.name}.</p>
            <p><b>Abilities:</b> {info.abilities?.[0].ability?.name}.</p>
            <p><b>Abilities:</b> {info.abilities?.[1].ability?.name}.</p>
            <p><b>Heigth:</b> {info.height} m.</p>
            <p><b>Weight:</b> {info.weight} m.</p>
            <div className="pokemon-imagen-2">
              <img src={info.sprites?.front_default} alt="pokemon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;