var multiply = function(num1, num2) {
  let num1Len = num1.length;
  let num2Len = num2.length;
  const arr = new Array(num1Len + num2Len).fill(0);
  for (let i = num1Len - 1; i >= 0; i--) {
    for (let j = num2Len - 1; j >= 0; j--) {
      let mul = (+num1[i]) * (+num2[j]);
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = arr[p2] + mul;
      arr[p2] = sum % 10;
      arr[p1] = arr[p1] + Math.floor(sum / 10);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '';
    if (i === 0 && arr[i] == 0) {
      arr[i] = '';
    }
  }
  let i = 0;
  while(i < arr.length && arr[i] == 0) {
    i++
  }
  return i === arr.length? '0': arr.splice(i).join('');
};