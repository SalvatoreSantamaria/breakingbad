import axios from 'axios' 
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/ui/characters/CharacterGrid'
import Search from './components/ui/Search'

function App() {
  //items comes from API, setItems is to change the state. 
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data) //once we get data
      setIsLoading(false) // stop the loading gif
    }
    fetchItems()

  }, [query]) //have to add dependencies [] as a second param. whenever the value of query here is changed, useEffect will fire off again

  //search has a prop of getQuery. it is passed in to Search.js like const Search = ({ getQuery })
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
