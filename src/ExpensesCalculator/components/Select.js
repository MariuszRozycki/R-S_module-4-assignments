import React from "react";

import Option from "./Option";
import removeDuplicates from "../Utils/removeDuplicates";

function Select({ radioIncome, incomeList, radioExpenses, expensesList }) {

  if (radioIncome) {
    return (
      <select name="category" id="category">
        {incomeList.map((el, index) => <Option
          key={index}
          category={el.category}
        />
        )}
      </select>
    )
  }

  if (radioExpenses) {
    return (
      <select name="category" id="category">
        {expensesList.map((el, index) => <Option
          key={index}
          category={el.category}
        />
        )}
      </select>
    )
  }
}

export default Select;