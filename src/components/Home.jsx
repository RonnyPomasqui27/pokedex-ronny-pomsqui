import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [inputName, setInputName] = useState('')

  const navigate = useNavigate();

  const userName = (e) => {
    navigate('/pokedex')
  }
  return (
    <>
      <div className='home'>
        {/* <div className='img'>
          <img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?resize=696%2C256&ssl=1" alt="" />
          <img src="https://www.nicepng.com/png/full/62-622961_no-one-knows-if-people-eat-pokmon-png.png" alt="" />
        </div> */}
        <div className="home-container">
          <h3>Welcome trainer !!!</h3>
          <img src="https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon04.png" alt="" width='180px' />
          <p>Give me your name to start</p>
          <div className="input">
            <input type="text"
              placeholder='insert your name'
              value={inputName}
              onChange={e => setInputName(e.target.value)}
              maxLength="30"
            />
            {
              inputName === '' ? (
                <a style={{ transform: 'scale(0)', transition: 'all 1s' }}><i className="fa-solid fa-arrow-right"></i></a>
              ) : (
                <a onClick={userName} style={{ transform: 'scale(1)', transition: 'all 2s' }}><i className="fa-solid fa-arrow-right"></i></a>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;