function myEval(exp) {
  const tokens = exp.replace(/\s/g, '') .split('');
  const operatorStack = [];
  const numberStack = [];

  while (tokens.length) {
    const token = tokens.shift();
    // 优先级高的 直接计算
    if (token === '*') {
      numberStack.push(numberStack.pop() * parseInt(tokens.shift(), 10));
    } else if (token === '+' || token === '-') {
      operatorStack.push(token);
    } else {
      numberStack.push(parseInt(token, 10));
    }
  }

  while (operatorStack.length) {
    const operator = operatorStack.pop();
    const num2 = numberStack.pop();
    const num1 = numberStack.pop();
    if (operator === '+') {
      numberStack.push(num1 + num2);
    } else {
      numberStack.push(num1 - num2);
    }
  }

  return numberStack.pop();
}