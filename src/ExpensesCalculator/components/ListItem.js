import React from "react";

function ListItem({ textItem, idItem, value, incomeList, setIncomeList, expensesList, setExpensesList, category }) {
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

  return (
    <>
      <li className="list-item">
        <div>Income: {textItem}</div>
        <div>Value: {value} euro</div>
        <div>Category: {category}</div>
        <button className="remove-button" onClick={removeHandler}>Delete X</button>
      </li>
    </>

  )
}

export default ListItem;