import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import '../styles/Characters.css'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)
      }
    default:
      return state
  }
}

const Character = () => {

  const [characters, setCharacters] = useState([])
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')

  const API = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [])

  const handleClick = favorite => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: favorite
    })
  }

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  // funcion para filtrar
/*   const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase())
  }) */

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [characters, search])

  return (
    <div className='characters'>
    <div>
      <input type='text' value={search} placeholder='Search' onChange={handleSearch}/>
    </div>
    {favorites.favorites.map(favorite => (
      <li key={favorite.id}>
        <img src={favorite.image} alt={favorite.name} />
        <p>{favorite.name}</p>
      </li>
    ))}
    {filteredCharacters.map(characters => (
      <div className='card' key={characters.id}>
        <img className='characterImg' src={characters.image} alt='character'/>
        <h2 className='characterName' >{characters.name}</h2>
        <h4 className='characterSpecie' >{`Specie: ${characters.species}`}</h4>
        <button type='button' onClick={()=> handleClick(characters)}>Add to favorites</button>
      </div>
    ))}
    </div>
  )
}

export default Character