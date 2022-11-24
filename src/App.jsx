
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'

function App() {

  return (
    <>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokemon/:id' element={<Pokemon />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  )
}

export default App
