import React from "react";

function SumExpenses({ expensesList }) {
  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < expensesList.length; i++) {
      sum += expensesList[i].value
    }
    return sum;
  }

  return (
    <>
      <p className="sum-expenses">Sum expenses: {addSumEl()} euro</p>
    </>
  )
}

export default SumExpenses;