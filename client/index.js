import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss'
import FormContainer from './Components/FormContainer'

const App = () => {

  const [isAvailable, updateAvailability] = useState(true)

  useEffect(() => {
    fetch('api/availability/?id=4', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      const { maxCapacity, currentCapacity } = json;
      (maxCapacity - currentCapacity) < 100 && updateAvailability(false)
    })
  }, []);

  return (
    <div className="column-container">
      <FormContainer isAvailable={isAvailable} />
    </div>
  )
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);