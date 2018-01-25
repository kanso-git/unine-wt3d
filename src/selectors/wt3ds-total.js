export default (wt3ds) => {
  return wt3ds
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};
