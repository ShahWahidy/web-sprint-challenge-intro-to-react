import React, {useState, useEffect}  from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //using state to save URL incase given API is down
  const [baseURL, setBaseURL] = useState('https://swapi.dev/api/people')
  //using useState to store fetch the data from the API
  const [character, setCharacter] = useState([]);
  //useEffect contains the axios call and keeps it from rendering multiple times
  useEffect(() => {
    axios.get(baseURL)
    .then((res) => {
      //console.log(res.data);
      //setCharacter function sends the data to character to line 17
      setCharacter(res.data);
    })
    .catch((err) => {
      console.error('something ain\'t working')
    })
  }, [])

  //return statment 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* charcterCard is imported on line 4 and data props is passed to it */}
      <CharacterCard data={character} />
    </div>
  );
}

export default App;
