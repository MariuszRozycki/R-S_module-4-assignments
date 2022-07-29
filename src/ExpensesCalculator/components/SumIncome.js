import React from "react";

function SumIncome({ incomeList }) {
  const addSumEl = () => {
    let sum = 0;
    for (let i = 0; i < incomeList.length; i++) {
      sum += incomeList[i].value
    }
    return sum;
  }
  addSumEl();

  if (addSumEl() > 0) {
    return (
      <>
        <p className="sum-income balance-plus" >Sum income: <span>{addSumEl()} &euro;</span></p>
      </>
    )
  }

  else {
    return (
      <>
        <p className="sum-income balance-minus" >Sum income: <span>{addSumEl()} &euro;</span></p>
      </>
    )
  }
}

export default SumIncome;