import React from "react";

function SumIncome({ incomeList }) {
  console.log("incomeList", incomeList);

  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < incomeList.length; i++) {

      sum += incomeList[i].value
      console.log(incomeList[i].value);
    }
    console.log("sum", sum);
    return sum;
  }
  addSumEl();

  return (
    <>
      <p className="sum-income">Sum income: {addSumEl()} euro</p>
    </>
  )
}

export default SumIncome;