const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const categoryCounts = categories.reduce((accumulator, category) => {
  accumulator[category] = (accumulator[category] || 0) + 1;
  return accumulator;
}, {});

console.log(categoryCounts);
