import React from "react";

function ListItem({ textItem,
  idItem,
  value,
  incomeList,
  setIncomeList,
  expensesList,
  setExpensesList,
  category,
  radioIncome,
  radioExpenses }) {
  const categoryToUpperFirstCase = category[0].toUpperCase() + category.slice(1);

  const removeHandler = () => {
    if (incomeList) {
      setIncomeList(incomeList.filter(el => {
        return el.id !== idItem;
      }))
    }
    if (expensesList) {
      setExpensesList(expensesList.filter(el => {
        return el.id !== idItem;
      }))
    }
  };

  if (radioIncome) {
    return (
      <>
        <li className="list-item">
          <div>Income: {textItem}</div>
          <div>Value: {value} euro</div>
          <div>Category: {categoryToUpperFirstCase}</div>
          <button className="remove-button" onClick={removeHandler}>Delete X</button>
        </li>
      </>
    )
  }

  if (radioExpenses) {
    return (
      <>
        <li className="list-item">
          <div>Expenses: {textItem}</div>
          <div>Value: {value} euro</div>
          <div>Category: {categoryToUpperFirstCase}</div>
          <button className="remove-button" onClick={removeHandler}>Delete X</button>
        </li>
      </>
    )
  }
}

export default ListItem;