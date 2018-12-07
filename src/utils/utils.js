export const getRandomNum = (min = 1, max = 100) => {
  const num = Math.floor(min + Math.random() * (max + 1 - min));
  return num;
};

export const isEven = num => !(num % 2);
