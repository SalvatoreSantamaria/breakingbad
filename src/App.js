import axios from 'axios' 
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'

function App() {
  //items comes from API, setItems is to change the state. 
  const [item, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      setItems(result.data) //once we get data
      setIsLoading(false) // stop the loading gif
    }
    fetchItems()

  }, []) //have to add dependencies [] as a second param

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
