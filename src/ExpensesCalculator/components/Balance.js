import React from "react";

function Balance({ incomeList, expensesList }) {
  const balance = () => {
    const incomeSum = () => {
      let sum = 0;
      for (let i = 0; i < incomeList.length; i++) {
        sum += incomeList[i].value;
      }
      return sum;
    }
    const expensesSum = () => {
      let sum = 0;
      for (let i = 0; i < expensesList.length; i++) {
        sum += expensesList[i].value;
      }
      return sum;
    }
    return incomeSum() - expensesSum();
  }

  return (
    <>
      <div style={{ width: "60%", margin: "20px auto" }} className={balance() > 0 ? "balance-plus" : "balance-minus"}>Balance: <span>{balance()} &euro;</span></div>
    </>
  )
}

export default Balance;