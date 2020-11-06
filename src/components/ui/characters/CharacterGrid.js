import React from 'react'
import CharacterItem from './CharacterItem'
//import Spinner from '../ui/Spinner'


// item below is getting passed into CharacterItem
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>'loading'</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid