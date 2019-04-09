export const randInt = (min = 0, max = 100) => {
  const range = max - min;
  const randomNumber = min + Math.random() * range;
  return Math.floor(randomNumber);
};
