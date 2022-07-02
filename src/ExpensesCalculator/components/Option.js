import React from "react";

function Option({ value }) {
  return (
    <>
      <option value={value}>
        {value[0].toUpperCase() + value.slice(1)}
      </option>
    </>
  )
}

export default Option;