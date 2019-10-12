import React, { useState, useEffect } from 'react';
import PeopleList from './components/PeopleList';
import Axios from 'axios';
import './App.css';
import { useDarkMode } from './hooks/darkMode';

function App() {

  const [data, setData] = useState([])
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        setData(res.data)

      })
      .catch(err => console.log('There was an error...', err))
  }, [])

  // console.log(data)

  return (
    <div className="App">
      <div className="header-switch">
        <h1>DARK MODE:</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
      <PeopleList data-testid="peopleList" data={data} />
    </div>
  );
}

export default App;
