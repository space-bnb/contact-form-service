import React, { useState } from 'react';

const GetInTouchForm = ( { handleFormChange }) => {

  const [isHidden, toggleHidden] = useState(true);

  const handleFormFieldFocus = (e) => {

    const field = e.target.parentElement;
    field.classList.add('focus');

  }

  const handleFieldBlur = (e) => {

    const field = e.target.parentElement;

    //can eventually add other helper functions here to do some *basic* front end validation
    if (!e.target.value) {

      if (field.classList.contains('complete')) field.classList.remove('complete');

      field.classList.add('error');
      toggleHidden(false);

    } else {

      if (field.classList.contains('error')) field.classList.remove('error');

      field.classList.add('complete');
      toggleHidden(true);

    }


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
              onFocus={(e) => {handleFormFieldFocus(e)}}
              onBlur={(e) => {handleFieldBlur(e)}}/>
              <div className="error-message" hidden={isHidden}>First and last, please.</div>
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
              onClick={(e) => {handleFormFieldFocus(e)}}
              onBlur={(e) => {handleFieldBlur(e)}}/>
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
              onClick={(e) => {handleFormFieldFocus(e)}}
              onBlur={(e) => {handleFieldBlur(e)}}/>
          </div>
        </div>
        <div className="form-item cell">
          <label htmlFor="moveInDateBtn">Move-in date</label>
          <button id="moveInDataBtn" type="button">Jan 21</button>
          <input
            id="moveInDate"
            name="moveInDate"
            hidden
            type="text" />
        </div>
        <div className="form-item cell">
          <label htmlFor="desiredCapacity">Number of People</label>
          <input
            id="desiredCapacity"
            type="number"
            value="1"
            required></input>
          <button>-</button>
          <button>+</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GetInTouchForm;