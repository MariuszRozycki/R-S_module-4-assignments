import React, { useRef, useState } from "react";
import '../App.css';

function FormValidation() {

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [bioInput, setBioInput] = useState('');
  const [radioMan, setRadioMan] = useState(false);
  const [radioWoman, setRadioWoman] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);

  const nameInputErr = useRef();
  const nameError = useRef();
  const emailInputErr = useRef();
  const emailError = useRef();
  const bioAreaErr = useRef();
  const bioError = useRef();
  const radioErr = useRef();
  const radioErrMessage = useRef();


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

  const radioManHandler = (e) => {
    setRadioMan(true);
  }

  const radioWomanHandler = (e) => {
    setRadioWoman(true);
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
    } else {
      emailInputErr.current.style.border = '1px solid black';
      emailError.current.style.display = 'none';
    }

    if (bioInput.trim().length < 11) {
      bioAreaErr.current.style.border = '2px solid red';
      bioError.current.style.display = 'block';
    } else {
      bioAreaErr.current.style.border = '1px solid black';
      bioError.current.style.display = 'none';
    }

    if (radioMan || radioWoman) {
      radioErr.current.style.border = '1px solid black';
      radioErrMessage.current.style.display = 'none';
    } else {
      radioErr.current.style.border = '2px solid red';
      radioErrMessage.current.style.display = 'block';
    }

    if ((!nameInput.trim().length < 5) && (checkEmail(emailInput)) && (!bioInput.trim().length < 11) && (radioMan || radioWoman)) {
      setButtonValue(true);
    }
  }

  if (buttonValue) {
    return (
      <div className="success">
        <h1>FormValidation</h1>
        <p >Your message is sent!</p>
      </div>
    )
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
      <fieldset ref={radioErr}>
        <legend>Choose your sex:</legend>
        <label htmlFor="man">Man:
          <input type="radio" name="sex" id="man" onChange={radioManHandler} />
        </label>
        <label htmlFor="woman">Woman:
          <input type="radio" name="sex" id="woman" onChange={radioWomanHandler} />
        </label>
      </fieldset>
      <p ref={radioErrMessage} className="error">Field is required!</p>
      <button type="submit" onClick={handleForm}>Send</button>
    </form>
  )
}

export default FormValidation;