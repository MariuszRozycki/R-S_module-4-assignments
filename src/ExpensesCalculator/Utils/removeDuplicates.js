const removeDuplicates = (array) => {
  const result = [];
  const blocker = {};
  for (const item of array) {
    if (blocker.hasOwnProperty(item)) {
      continue;
    }
    blocker[item] = true;
    result.push(item);
  }
  return result;
};

export default removeDuplicates;