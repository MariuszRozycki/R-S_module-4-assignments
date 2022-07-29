import React, { useState, useRef } from "react";

import Select from "./components/Select";
import ListItem from "./components/ListItem";
import SumIncome from "./components/SumIncome";
import SumExpenses from "./components/SumExpenses";
import Balance from "./components/Balance";
import option from "./Utils/options";
import "./ExpensesCalculator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ExpensesCalculator() {
  const [nameOfValue, setNameOfValue] = useState("");
  console.log("nameOfValue", nameOfValue, nameOfValue.length);
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [radioIncome, setRadioIncome] = useState(false);
  const [radioExpenses, setRadioExpenses] = useState(false);
  const [amountValue, setAmountValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("all category");
  const date = new Date().toLocaleDateString();

  const listIncomeRef = useRef();
  const listExpensesRef = useRef();
  const listHandlerButton = useRef();
  const nameOfValueRef = useRef();
  const errorNameRef = useRef();
  const amountValueRef = useRef();
  const errorAmountValueRef = useRef();
  const errorRadioRef = useRef();

  const nameOfValueHandler = (event) => {
    setNameOfValue(event.target.value);
  }

  const amountValueHandler = (e) => {
    setAmountValue(parseInt(e.target.value));
  }

  const radioIncomeHandler = () => {
    setRadioIncome(true);
    setRadioExpenses(false);
  }

  const radioExpensesHandler = () => {
    setRadioExpenses(true);
    setRadioIncome(false);
  }

  const categoryValueHandler = (e) => {
    setCategoryValue(e.target.value);
  }

  const listHandler = (event) => {
    event.preventDefault();

    if (nameOfValue.length < 1) {
      nameOfValueRef.current.style = "border: 2px solid red";
      errorNameRef.current.style = "display: block";
    }
    else {
      nameOfValueRef.current.style = "border: 2px solid black";
      errorNameRef.current.style = "display: none";
    }

    if (amountValue.length < 1) {
      amountValueRef.current.style = "border: 2px solid red";
      errorAmountValueRef.current.style = "display: block";
    }
    else {
      amountValueRef.current.style = "border: 2px solid black";
      errorAmountValueRef.current.style = "display: none";
    }

    if (!radioIncome && !radioExpenses) {
      errorRadioRef.current.style = "display: block";
    } else {
      errorRadioRef.current.style = "display: none";
    }


    if (!nameOfValue || !amountValue) {
      return null;
    }

    if (radioIncome) {
      setIncomeList([
        ...incomeList,
        {
          text: nameOfValue,
          id: Math.random() * 1000,
          value: parseFloat(amountValue),
          category: categoryValue
        }
      ]);
    }

    if (radioExpenses) {
      setExpensesList([
        ...expensesList,
        {
          text: nameOfValue,
          id: Math.random() * 1000,
          value: parseFloat(amountValue),
          category: categoryValue
        }
      ]);
    }
    setNameOfValue("");
    setAmountValue("");
  }

  return (
    <div className="expenses-calculator">
      <h1>ExpensesCalculator</h1>
      <div className="wrapper--all-lists">
        <div className="wrapper-list">
          <h2>Income:</h2>
          <ol ref={listIncomeRef} className="list-income">
            {incomeList.map((el, index) => <ListItem
              key={index}
              textItem={el.text}
              idItem={el.id}
              incomeList={incomeList}
              setIncomeList={setIncomeList}
              value={el.value}
              category={el.category}
              radioIncome={radioIncome}
              date={date}
            />)}
          </ol>
          <SumIncome
            incomeList={incomeList}
          />
        </div>
        <div className="wrapper-list">
          <h2>Expenses:</h2>
          <ol ref={listExpensesRef} className="list-expenses">
            {expensesList.map((el, index) => <ListItem
              key={index}
              textItem={el.text}
              idItem={el.id}
              expensesList={expensesList}
              setExpensesList={setExpensesList}
              value={el.value}
              category={el.category}
              radioExpenses={radioExpenses}
              date={date}
              setCategoryValue={setCategoryValue}
            />)}
          </ol>
          <SumExpenses
            expensesList={expensesList}
          />
        </div>
      </div>
      <Balance
        incomeList={incomeList}
        expensesList={expensesList}
      />
      <form className="form-wrapper">
        <div className="radio-wrapper">
          <label className="radio-label" htmlFor="income">Income:
            <input
              name="option"
              id="income"
              type="radio"
              onClick={radioIncomeHandler} />
          </label>
          <label className="radio-label" htmlFor="expenses">Expenses:
            <input
              name="option"
              id="expenses"
              type="radio"
              onClick={radioExpensesHandler} />
          </label>
        </div>
        <p
          className="error"
          ref={errorRadioRef}
        >
          Choose option
          <FontAwesomeIcon
            className="font-awesome-error"
            icon={faArrowUp}
          /></p>
        <label htmlFor="name-of-value">Name of value:</label>
        <input
          className="input-name-value"
          name="name-of-value"
          type="text"
          autoComplete="off"
          value={nameOfValue}
          onChange={nameOfValueHandler}
          maxLength="25"
          ref={nameOfValueRef}
        />
        <p
          className="error"
          ref={errorNameRef}
        >
          Fill up field
          <FontAwesomeIcon
            className="font-awesome-error"
            icon={faArrowUp}
          /></p>
        <label htmlFor="amount">Amount: </label>
        <input
          className="input-amount-value"
          name="amount"
          id="amount"
          type="number"
          autoComplete="off"
          onChange={amountValueHandler}
          value={amountValue}
          maxLength="25"
          ref={amountValueRef}
        />
        <p
          className="error"
          ref={errorAmountValueRef}
        >
          Fill up field
          <FontAwesomeIcon
            className="font-awesome-error"
            icon={faArrowUp} /></p>
        <Select
          category={option}
          categoryValueHandler={categoryValueHandler}
        />
        <button
          className="btn"
          ref={listHandlerButton}
          onClick={listHandler}>
          Add item
          <FontAwesomeIcon
            className="font-awesome"
            icon={faSquarePlus} />
        </button>
      </form>
    </div>
  )
}

export default ExpensesCalculator;