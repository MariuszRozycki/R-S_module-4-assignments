import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import '../App.css';

function ReactFormValidation() {

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const refErrNoAt = useRef();
  const [emailInput, setEmailInput] = useState();

  const emailHandler = (event) => {
    setEmailInput(event.target.value)
  }

  const handleData = (data) => {
    console.log('data', data);
    console.log('data email', data.userEmail);
    if (!emailInput.includes('@')) {
      console.error(`Mail address doesn't include @ - symbol`);
      refErrNoAt.current.style.display = 'block';
    } else {
      refErrNoAt.current.style.display = 'none';
      console.log('Correct e-mail')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleData)} className="form">
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
      <fieldset>
        <legend>Choose your sex:</legend>
        <label htmlFor="man_react-val">Man:
          <input type="radio" name="choose-sex" id="man_react-val" />
        </label>
        <label htmlFor="woman_react-val">Woman:
          <input type="radio" name="choose-sex" id="woman_react-val" />
        </label>
      </fieldset>
      <input type="submit" value="Submit React Form" />
    </form>
  )
}

export default ReactFormValidation;