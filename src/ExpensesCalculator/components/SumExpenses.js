import React from "react";

function SumExpenses({ expensesList }) {
  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < expensesList.length; i++) {
      sum += expensesList[i].value
    }
    return sum;
  }

  if (addSumEl() > 0) {
    return (
      <>
        <p className="sum-expenses balance-minus">Sum expenses: {addSumEl()} euro</p>
      </>
    )
  }
  else {
    return (
      <>
        <p className="sum-expenses balance-plus">Sum expenses: {addSumEl()} euro</p>
      </>
    )
  }
}

export default SumExpenses;