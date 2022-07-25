import React from "react";
import removeDuplicates from "../Utils/removeDuplicates";

function Option({ category }) {
  console.log(category);

  return (
    <>
      <option value={category}>
        {category[0].toUpperCase() + category.slice(1)}
      </option>
    </>
  )
}

export default Option;