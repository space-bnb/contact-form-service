import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss';
import FormContainer from './Components/FormContainer';

const App = () => {

  const [isAvailable, updateAvailability] = useState(true);

  useEffect(() => {
    const id = window.location.pathname.split('/')[2];
    fetch(`/api/availability/?id=${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      const { maxCapacity, currentCapacity } = json;
      if ((maxCapacity - currentCapacity) < 50) {
         updateAvailability(false);
      };
    })
  }, []);

  return (
    <div className="column-container">
      <FormContainer isAvailable={isAvailable} />
    </div>
  )
}

const root = document.getElementById('contact-service');
ReactDOM.render(<App />, root);