import React from "react";

function SumExpenses({ sumExpenses }) {
  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < sumExpenses.length; i++) {
      sum += sumExpenses[i].sum
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