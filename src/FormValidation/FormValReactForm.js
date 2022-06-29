// Nie wiedzialem jak zrobic bordery na pustych inputach, ale piszac komponent ReactForm znalazlem odpowiednie tutoriale i doszedlem do tego
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import '../App.css';

function ReactFormValidation() {

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const [emailInput, setEmailInput] = useState();
  const [flag, setFlag] = useState(false);
  const [radioMan, setRadioMan] = useState(false);
  const [radioWoman, setRadioWoman] = useState(false);

  const refErrNoAt = useRef();
  const radioErr = useRef();
  const radioErrMessage = useRef();

  const emailHandler = (event) => {
    setEmailInput(event.target.value)
  }

  const radioManHandler = (e) => {
    setRadioMan(true);
  }

  const radioWomanHandler = (e) => {
    setRadioWoman(true);
  }

  const handleRadio = () => {
    if (radioMan || radioWoman) {
      console.log('radioMan || radioWoman', radioMan || radioWoman);
      radioErr.current.style.border = '1px solid black';
      radioErrMessage.current.style.display = 'none';
    } else {
      radioErr.current.style.border = '2px solid red';
      radioErrMessage.current.style.display = 'block';
    }
  }

  const onSubmit = (data, handleRadio) => {
    if (!emailInput.includes('@')) {
      console.error(`Mail address doesn't include @ - symbol`);
      refErrNoAt.current.style.display = 'block';
    } else {
      refErrNoAt.current.style.display = 'none';
    }

    if (data && emailInput.includes('@') && handleRadio) {
      setFlag(true);
    }
  }

  if (flag) {
    return (
      <div className="success">
        <h1>ReactFormVal</h1>
        <p >Your message is sent!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, handleRadio)} className="form">
      <h1>ReactFormVal</h1>
      <label htmlFor="userName">Name (Min. 2 character required)
        <input id="userName" placeholder="Type your name" {...register("name", {
          required: 'To type name is required',
          minLength: {
            value: 2,
            message: 'Min length is 2 character!'
          }
        })} />
        <p className="error-react_form">{errors.name?.message}</p>
      </label>
      <label htmlFor="userE-mail">E-mail
        <input id="userE-mail" {...register("email", {
          required: 'Email is required and must include @!'
        })} onChange={emailHandler} />
        <p className="error-react_form">{errors.email?.message}</p>
        <p ref={refErrNoAt} className="error-no-at">E-mail still doesn't include @ - symbol</p>
      </label>
      <label htmlFor="userBio">Write down something about bio:
        <textarea {...register("bio", {
          required: 'To type bio is required!',
          minLength: {
            value: 10,
            message: 'Min length of characters is 10'
          }
        })} id="userBio" ></textarea>
        <p className="error-react_form">{errors.bio?.message}</p>
      </label>
      <fieldset ref={radioErr}>
        <legend>Choose your sex:</legend>
        <label htmlFor="man_react-val">Man:
          <input type="radio" name="choose-sex" id="man_react-val" onChange={radioManHandler} />
        </label>
        <label htmlFor="woman_react-val">Woman:
          <input type="radio" name="choose-sex" id="woman_react-val" onChange={radioWomanHandler} />
        </label>
      </fieldset>
      <p ref={radioErrMessage} className="error">Field is required!</p>
      <input type="submit" value="Submit React Form" />
    </form>
  )
}

export default ReactFormValidation;