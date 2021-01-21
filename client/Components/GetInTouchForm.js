import React from 'react';

const GetInTouchForm = ( { handleFormChange }) => {

  const handleFormFieldClick = (e) => {

    const field = e.target.parentElement;
    field.classList.add('focus');

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
            <input id="fullName" name="fullName"  type="text" required onClick={(e) => {handleFormFieldClick(e)}}/>
          </div>
        </div>
        <div className="form-item">
          <div className="field">
            <label htmlFor="email">Work Email</label>
            <input id="email" name="email" type="email" required onClick={(e) => {handleFormFieldClick(e)}}/>
          </div>
        </div>
        <div className="form-item">
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="phone" required onClick={(e) => {handleFormFieldClick(e)}}/>
          </div>
        </div>
        <div className="form-item cell">
          <label htmlFor="moveInDateBtn">Move-in date</label>
          <button id="moveInDataBtn" type="button">Jan 21</button>
          <input id="moveInDate" name="moveInDate" hidden type="text" />
        </div>
        <div className="form-item cell">
          <label htmlFor="desiredCapacity">Number of People</label>
          <input id="desiredCapacity" type="number" value="1" required></input>
          <button>-</button>
          <button>+</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GetInTouchForm;