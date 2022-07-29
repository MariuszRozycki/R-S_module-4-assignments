import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ListItem({ textItem,
  idItem,
  value,
  incomeList,
  setIncomeList,
  expensesList,
  setExpensesList,
  category,
  date }) {

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

  return (
    <>
      <li className="list-item">
        <div>Date: <span>{date}</span></div>
        <div>Text value: <span>{textItem}</span></div>
        <div>Value: <span>{value} &euro;</span></div>
        <div>Category: <span>{categoryToUpperFirstCase}</span></div>
        <button className="remove-button" onClick={removeHandler}>
          X
          <FontAwesomeIcon className="font-awesome" icon={faTrashCan} />
        </button>
      </li>
    </>
  )

}

export default ListItem;