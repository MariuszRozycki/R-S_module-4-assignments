import React from "react";

function SumIncome({ sumIncome }) {

  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < sumIncome.length; i++) {
      sum += sumIncome[i].sum
    }
    return sum;
  }

  return (
    <>
      <p className="sum-income">Sum income: {addSumEl()} euro</p>
    </>
  )
}

export default SumIncome;