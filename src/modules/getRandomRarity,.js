export const getRandomRarity = () => {
  let n = Math.random() * (100 - 1 + 1) + 1;

  if (n >= 90) {
    return "UR";
  } else if (n < 90 && n >= 60) {
    return "R";
  } else {
    return "C";
  }
};