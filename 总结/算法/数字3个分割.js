function toD(str) {

  // '12345.23'
  // '32.54321'
  // '32.  543  21'

  // 12 234  .23

  // 32. 543 21

  //.23  345 12

  // 12 345 .23
  // 12.,234,.23

  str = str.split('').reverse().join('');

  return str.match(/(\d+\.)|(\d{1,3})/g).map(e => e.split('').reverse().join('')).reverse().join(',').replace(',.', '.');
}