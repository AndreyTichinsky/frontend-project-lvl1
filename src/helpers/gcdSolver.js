const gcdSolver = (a, b) => {
  let d1 = a;
  let d2 = b;
  while (d1 !== 0 && d2 !== 0) {
    if (d1 > d2) {
      d1 %= d2;
    } else {
      d2 %= d1;
    }
  }
  return d1 + d2;
};
export default gcdSolver;
