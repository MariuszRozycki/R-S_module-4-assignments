import React from "react";

function ListItem({ textItem, idItem, value, incomeList, setIncomeList, expensesList, setExpensesList }) {
  const removeHandler = () => {
    if (incomeList) {
      setIncomeList(incomeList.filter(el => {
        console.log("el.id", el.id);
        console.log("idItem", idItem);
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
        <div>{textItem}</div>
        <div>{value} euro</div>
        <button className="remove-button" onClick={removeHandler}>X</button>
      </li>
    </>

  )
}

export default ListItem;