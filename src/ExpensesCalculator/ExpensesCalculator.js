import React, { useState, useRef } from "react";
import Select from "./components/Select";

import "./ExpensesCalculator.css";

function ExpensesCalculator() {
  const [nameOfValue, setNameOfValue] = useState();
  const [radioIncome, setRadioIncome] = useState(false);
  const [radioExpenses, setRadioExpenses] = useState(false);

  const listIncomeRef = useRef();
  const listExpensesRef = useRef();
  console.log(nameOfValue);

  const nameOfValueHandler = (event) => {
    setNameOfValue(event.target.value)
  }

  const radioIncomeHandler = () => {
    setRadioIncome(true);
    setRadioExpenses(false);
  }

  const radioExpensesHandler = () => {
    setRadioExpenses(true);
    setRadioIncome(false);
  }

  const listHandler = (event) => {
    event.preventDefault();

    if (radioIncome) {
      console.log('Pierwszy');
      listIncomeRef.current.innerHTML += `<li>${nameOfValue}</li>`;
    }

    if (radioExpenses) {
      listExpensesRef.current.innerHTML += `<li>${nameOfValue}</li>`;
    }
  }


  return (
    <div>
      <h1>ExpensesCalculator</h1>
      <div className="wrapper--all-lists">
        <div className="wrapper-list">
          <h2>Income</h2>
          <ul ref={listIncomeRef} className="list-income"></ul>
        </div>
        <div className="wrapper-list">
          <h2>Expenses</h2>
          <ul ref={listExpensesRef} className="list-expenses"></ul>
        </div>
      </div>
      <form className="form-wrapper">
        <div className="radio-wrapper">
          <label className="radio-label" htmlFor="income">Income:
            <input name="option" id="income" type="radio" onClick={radioIncomeHandler} />
          </label>
          <label className="radio-label" htmlFor="expenses">Expenses:
            <input name="option" id="expenses" type="radio" onClick={radioExpensesHandler} />
          </label>
        </div>
        <label htmlFor="name-of-value">Name of value:
          <input
            name="name-of-value"
            type="text"
            onChange={nameOfValueHandler}
          />
        </label>
        <button onClick={listHandler}>Add</button>
        <label htmlFor="amount">Amount:
          <input name="amount" type="number" />
        </label>
        <label htmlFor="">Choose category:
          <Select />
        </label>
      </form>
    </div>
  )
}

export default ExpensesCalculator;