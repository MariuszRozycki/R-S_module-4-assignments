import React from "react";

import Option from "./Option";

const category = [
  { value: "home" },
  { value: "office" },
  { value: "entertainment" },
  { value: "drinks" },
  { value: "hobby" },
  { value: "car" }
];


function Select() {
  return (
    <select name="category" id="category">
      {category.map((el, index) => (
        <Option
          key={`key-${index}`}
          value={el.value}
        />
      ))}
    </select>
  )
}

export default Select;