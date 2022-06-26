import React, { useRef, useState } from "react";
import '../App.css';

function FormValidation() {

  const [nameInput, setNameInput] = useState('');
  console.log('nameInput', nameInput);
  const nameError = useRef();

  const inputNameHandle = (e) => {
    setNameInput(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();

    if (nameInput.length < 5) {
      nameError.current.style.display = 'block'
    }
  }

  return (
    <form className="form">
      <h1>FormValidation</h1>
      <label htmlFor="name">Name (Min. 5 characters required)
        <input id="name" name="name" onChange={inputNameHandle} />
        <p ref={nameError} className="error-text">Field is required - min. 5 characters</p>
      </label>
      <label htmlFor="e-mail">E-mail
        <input id="e-mail" name="e-mail" />
        <p className="error-text">Field is required</p>
      </label>
      <label htmlFor="bio">Write down something about bio:
        <textarea name="bio" id="bio"></textarea>
        <p className="error-text">Field is required</p>
      </label>
      <fieldset>
        <legend>Choose your sex:</legend>
        <label htmlFor="man">Man:
          <input type="radio" name="sex" id="man" />
        </label>
        <label htmlFor="woman">Woman:
          <input type="radio" name="sex" id="woman" />
        </label>
      </fieldset>
      <p className="error-text">Field is required</p>
      <button type="submit" onClick={handleForm}>Send</button>
    </form>
  )
}

export default FormValidation;