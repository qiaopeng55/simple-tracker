const swapArrayItems = (array, indexA, indexB) => {
  const cloneArray = [...array];
  // eslint-disable-next-line prefer-destructuring
  cloneArray[indexA] = cloneArray.splice(indexB, 1, cloneArray[indexA])[0];
  return cloneArray;
};

export default swapArrayItems;
