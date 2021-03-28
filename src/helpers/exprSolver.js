export const exprSolver = (expr) => {
  const exprArray = expr.split(' ');
  const firstOperand = Number(exprArray[0]);
  const secondOperand = Number(exprArray[2]);
  const operator = exprArray[1];
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
  }
  return null;
};
