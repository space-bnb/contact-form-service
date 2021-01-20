import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss'

const App = () => {

  useEffect(() => {
    fetch('api/availability/?id=4', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }, [])

  return (
    <h1>Form goes here</h1>
  )
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);