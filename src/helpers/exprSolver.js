export const exprSolver = (expr) => {
  const exprArray = expr.split(' ');
  const firstOperand = exprArray[0];
  const secondOperand = exprArray[2];
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
