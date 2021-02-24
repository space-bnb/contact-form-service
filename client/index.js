const { useState, useEffect } = React;

import './Styles/main.scss';
import FormContainer from './Components/FormContainer';

const App = () => {

  const [isAvailable, updateAvailability] = useState(true);

  useEffect(() => {

    const splitUrl = window.location.pathname.split('/').filter(el => el);
    const id = splitUrl[splitUrl.length - 1];

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