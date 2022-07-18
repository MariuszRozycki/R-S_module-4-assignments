import React, { useState, useRef } from "react";

import Select from "./components/Select";
import ListItem from "./components/ListItem";

import "./ExpensesCalculator.css";

function ExpensesCalculator() {
  const [nameOfValue, setNameOfValue] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [radioIncome, setRadioIncome] = useState(false);
  const [radioExpenses, setRadioExpenses] = useState(false);
  const [amountValue, setAmountValue] = useState();
  console.log(amountValue);

  const listIncomeRef = useRef();
  const listExpensesRef = useRef();
  const listHandlerButton = useRef();



  const nameOfValueHandler = (event) => {
    setNameOfValue(event.target.value)
  }

  const amountValueHandler = (e) => {
    setAmountValue(e.target.value);
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

    if (!nameOfValue) {
      console.log("Pusty string");
      return null;
    }

    if (radioIncome) {
      setIncomeList([
        ...incomeList,
        {
          text: nameOfValue,
          id: Math.floor(Math.random() * 1000),
          value: amountValue
        }
      ])

    }

    if (radioExpenses) {
      setExpensesList([
        ...expensesList,
        {
          text: nameOfValue,
          id: Math.floor(Math.random() * 1000),
          value: amountValue
        }
      ])
    }
    setNameOfValue("");
  }



  return (
    <div>
      <h1>ExpensesCalculator</h1>
      <div className="wrapper--all-lists">
        <div className="wrapper-list">
          <h2>Income</h2>
          <ol ref={listIncomeRef} className="list-income">
            {incomeList.map((el, index) => <ListItem
              key={index}
              textItem={el.text}
              idItem={el.id}
              incomeList={incomeList}
              setIncomeList={setIncomeList}
              value={el.value}
            />)}
          </ol>
        </div>
        <div className="wrapper-list">
          <h2>Expenses</h2>
          <ol ref={listExpensesRef} className="list-expenses">
            {expensesList.map((el, index) => <ListItem
              key={index}
              textItem={el.text}
              idItem={el.id}
              expensesList={expensesList}
              setExpensesList={setExpensesList}
              value={el.value}
            />)}
          </ol>
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
            value={nameOfValue}
            onChange={nameOfValueHandler}
          />
        </label>
        <button ref={listHandlerButton} onClick={listHandler}>Add</button>
        <label htmlFor="amount">Amount:
          <input name="amount" type="number" onChange={amountValueHandler} />
        </label>
        <label htmlFor="">Choose category:
          <Select />
        </label>
      </form>
    </div>
  )
}

export default ExpensesCalculator;