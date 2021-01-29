import React, { useState } from 'react';

const GetInTouchForm = ( { handleFormChange }) => {

  const [isHidden, toggleHidden] = useState({
    fullName: true,
    email: true,
    phone: true
  });

  const [numberOfPeople, changeNumberOfPeople] = useState(1);

  const handleFormFieldFocus = (e) => {

    const field = e.target.parentElement;
    field.classList.add('focus');

  }

  const handleFieldBlur = (e, name) => {

    const field = e.target.parentElement;
    const newState = {...isHidden};
    //can eventually add other helper functions here to do some *basic* front end validation
    if (!e.target.value) {

      if (field.classList.contains('complete')) field.classList.remove('complete');

      field.classList.add('error');
      newState[name] = false
      toggleHidden(newState);

    } else {

      if (field.classList.contains('error')) field.classList.remove('error');

      field.classList.add('complete');
      newState[name] = true
      toggleHidden(newState);

    }

  };

  const handleMoveInClick = () => {

    const cal = document.getElementById('calendar');
    if (cal.hasAttribute('hidden')) {
      cal.removeAttribute('hidden');
    } else {
      cal.setAttribute('hidden', true);
    }
  }

  const handlePeopleChange = (e) => {
    e.preventDefault();
    let currentNumber = numberOfPeople;
    const direction = e.target.classList[0];
    const input = document.getElementById('desiredCapacity');
    if (currentNumber === 1 && direction === 'down') return;
    direction === 'up' ? currentNumber += 1 : currentNumber -=1;
    input.value = currentNumber;
    changeNumberOfPeople(currentNumber);
  }

  return (
    <div className="get-in-touch-form-wrapper">
      <button className="close-form" onClick={() => { handleFormChange('self-serve')}}>X</button>
      <h3>Get in touch</h3>

      <form>
        <p>Fill out your info below and we'll get you connected with one of our representatives.</p>
        <div className="form-item">
          <div className="field" >
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              onFocus={handleFormFieldFocus}
              onBlur={(e) => {handleFieldBlur(e, e.target.name)}}/>
              <div className="error-message" hidden={isHidden.fullName}>First and last, please.</div>
          </div>
        </div>
        <div className="form-item">
          <div className="field">
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onClick={handleFormFieldFocus}
              onBlur={(e) => {handleFieldBlur(e, e.target.name)}}/>
              <div className="error-message" hidden={isHidden.email}>We need this for confirmations.</div>
          </div>
        </div>
        <div className="form-item">
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="phone"
              required
              onClick={handleFormFieldFocus}
              onBlur={(e) => {handleFieldBlur(e, e.target.name)}}/>
              <div className="error-message" hidden={isHidden.phone}>Please give us a way to get in contact.</div>
          </div>
        </div>
        <div className="cell-container">
          <div className="form-item cell">
            <div className="cell-wrap">
              <label htmlFor="moveInDateBtn">Move-in date</label>
              <button id="moveInDataBtn" type="button" className="move-in" onClick={handleMoveInClick}>Jan 21</button>
            </div>
            <input id="calendar" type="date" hidden/>
          </div>
          <div className="form-item cell">
            <div className="cell-wrap">
              <label htmlFor="desiredCapacity">Number of People</label>
              <input
                id="desiredCapacity"
                type="number"
                defaultValue={numberOfPeople}
                required />
              <button className="down" onClick={handlePeopleChange}>-</button>
              <button className="up" onClick={handlePeopleChange}>+</button>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GetInTouchForm;