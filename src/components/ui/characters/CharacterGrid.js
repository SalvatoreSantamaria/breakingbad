import React from 'react'

const CharacterGrid = ({ items, isLoading }) => {
  //when returning items, they have to have unique id for the key
  return (
    isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
      {items.map(x => x (
        <h1>key={x.char_id} {x.name} </h1>
      ))}
    </section>)

  )
}

export default CharacterGrid