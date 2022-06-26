import React, { useRef, useState } from "react";
import '../App.css';

function FormValidation() {

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [bioInput, setBioInput] = useState('');

  const nameInputErr = useRef();
  const nameError = useRef();

  const emailInputErr = useRef();
  const emailError = useRef();

  const bioAreaErr = useRef();
  const bioError = useRef();


  const nameInputHandle = (e) => {
    setNameInput(e.target.value);
  }

  const emailInputHandle = (e) => {
    setEmailInput(e.target.value);
  }

  const checkEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }

  const bioInputHandle = (e) => {
    setBioInput(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();

    if (nameInput.trim().length < 5) {
      nameInputErr.current.style.border = '2px solid red';
      nameError.current.style.display = 'block';
    } else {
      nameInputErr.current.style.border = '1px solid black';
      nameError.current.style.display = 'none';
    }

    if (!checkEmail(emailInput)) {
      emailInputErr.current.style.border = '2px solid red';
      emailError.current.style.display = 'block';
    }
    else {
      emailInputErr.current.style.border = '1px solid black';
      emailError.current.style.display = 'none';
    }

    if (bioInput.trim().length < 11) {
      bioAreaErr.current.style.border = '2px solid red';
      bioError.current.style.display = 'block';
    }
    else {
      bioAreaErr.current.style.border = '1px solid black';
      bioError.current.style.display = 'none';
    }
  }


  return (
    <form className="form">
      <h1>FormValidation</h1>
      <label htmlFor="name">Name (Min. 5 characters required)
        <input ref={nameInputErr} id="name" name="name" onChange={nameInputHandle} />
        <p ref={nameError} className="error">Field is required - min. 5 characters</p>
      </label>
      <label htmlFor="e-mail">E-mail
        <input ref={emailInputErr} id="e-mail" name="e-mail" onChange={emailInputHandle} />
        <p ref={emailError} className="error">Field is required</p>
      </label>
      <label htmlFor="bio">Write down something about bio:
        <textarea ref={bioAreaErr} name="bio" id="bio" onChange={bioInputHandle} ></textarea>
        <p ref={bioError} className="error">Field is required</p>
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
      <button type="submit" onClick={handleForm}>Send</button>
    </form>
  )
}

export default FormValidation;