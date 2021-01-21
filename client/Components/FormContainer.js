import React, { useState } from 'react';
import SelfServeOptions from './SelfServeOptions';
import GetInTouchForm from './GetInTouchForm';
import BookATourForm from './BookATourForm';

const FormContainer = () => {

  const [ formType, setFormType ] = useState('self-serve');

  const handleFormChange = (formType) => {
    setFormType(formType);
  }

  let form;

  if (formType === 'self-serve') {
    form = <SelfServeOptions handleFormChange={handleFormChange}/>
  } else if (formType === 'get-in-touch') {
    form = <GetInTouchForm handleFormChange={handleFormChange}/>
  } else if (formType === 'book-tour') {
    form = <BookATourForm handleFormChange={handleFormChange}/>
  }

  return (
    <div className="sticky-form-wrap">
      {form}
    </div>
  )
}

export default FormContainer;