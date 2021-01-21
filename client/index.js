import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.scss'
import FormContainer from './Components/FormContainer'

const App = () => {

  useEffect(() => {
    fetch('api/availability/?id=4', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }, [])

  return (
    <div className="column-container">
      <FormContainer />
    </div>
  )
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);