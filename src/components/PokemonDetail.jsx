import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from '../store/slices/userName.slice';
import Pokemon from './Pokemon';

const pokemonDetail = ({ url, id }) => {

  const [pokemonDeatil, setPokemonDetail] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemonDetail(res.data))
  }, [])

  // console.log(pokemonDeatil)

  const infoPokemon = () => {
    navigate(`/pokemon/:${pokemonDeatil.id}`)
    dispatch(userName(pokemonDeatil.id))
  }

  return (
    <>{


      <div className="poke-container" key={pokemonDeatil.id}>
        <div key={url} className="poke-header">
          <div className="poke-img">
            <img src={pokemonDeatil.sprites?.other["official-artwork"].front_default} alt="" />
          </div>
          <h2>{pokemonDeatil.name}</h2>
        </div>
        <div className="poke-body">
          <div className="raya"></div>
          <div className="poke-info">
            <div className="ball"></div>
            <p><b>Type: {" "}</b>{pokemonDeatil.types?.[0]?.type?.name}</p>
          </div>
          {/* al hacer click tiene que llevar el id y cambiar a la siguiente pagina  */}
          <a onClick={infoPokemon} className='show'>Show</a>
        </div>
      </div>
    }
    </>
  );
};

export default pokemonDetail;