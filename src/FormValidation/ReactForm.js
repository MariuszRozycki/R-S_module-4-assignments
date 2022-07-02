import React, { useState } from "react";
import { useForm } from "react-hook-form";

import './ReactForm.css';

function ReactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log('errors', errors);
  console.log('errors', errors.firstName?.ref);

  const [submit, setSubmit] = useState(false);
  console.log(submit);


  const onSubmit = (data) => {
    console.log(data);
    setSubmit(true);
  }



  if (submit) {
    return (
      <fieldset className="success">
        <h1 className="form-sent">Your form in component ReactForm is sent!</h1>
      </fieldset>
    )
  }

  return (
    <fieldset className="form-wrapper">
      <legend>React Form</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.firstName && 'invalid'}
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: 'First name is required!',
            minLength: {
              value: 2,
              message: 'Min. length is two characters!'
            }
          })}
        />
        <p className="errors">{errors.firstName?.message}</p>
        <input
          className={errors.firstName && 'invalid'}
          type="text"
          placeholder="Last name"
          {...register("lastName", {
            required: 'Last name is required',
            minLength: {
              value: 2,
              message: 'Min. length is two characters!'
            }
          })}
        />
        <p className="errors">{errors.lastName?.message}</p>
        <input
          className={errors.email && 'invalid'}
          type="text"
          placeholder="Email"
          {...register("email", {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Must be in format: example@ex.ex'
            }
          })}
        />
        <p className="errors">{errors.email?.message}</p>
        <input className={errors.mobileNumber && 'invalid'}
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: 'Mobile nr is required',
            minLength: {
              value: 6,
              message: 'Must have min 6 characters'
            }
          })}
        />
        <p className="errors">{errors.mobileNumber?.message}</p>
        <fieldset className={errors.developer && 'invalid'}>
          <legend>Are you developer?</legend>
          <div className="wrapper-radio-inp">
            <label htmlFor="dev-occupation-yes">Yes</label>
            <input
              {...register("developer", {
                required: 'Choose option'
              })}
              type="radio"
              value="Yes"
              id="dev-occupation-yes"
            />
          </div>
          <div className="wrapper-radio-inp">
            <label htmlFor="dev-occupation-no">No</label>
            <input
              {...register("developer", {
                required: 'Choose option'
              })}
              type="radio"
              value="No"
              id="dev-occupation-no"
            />
          </div>
          <p className="errors">{errors.developer?.message}</p>
        </fieldset>
        <input type="submit" />
      </form>
    </fieldset>
  );
}

export default ReactForm;