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
      <div>Balance: {balance()} euro</div>
    </>
  )
}

export default Balance;