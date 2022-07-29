import React from "react";

function Select({ category, categoryValueHandler }) {

  return (
    <label className="select-label" htmlFor="">Choose category:
      <select
        name="category"
        id="category"
        onChange={categoryValueHandler}
      >
        <option value="">Choose category:</option>
        {category.map((el, index) => (
          <option
            key={index}
            value={el.value}
          >
            {el.value[0].toUpperCase() + el.value.slice(1)}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select;