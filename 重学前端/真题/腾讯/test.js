function test(a,b) {
  console.log(b)
  return {
    test:function(c){
      return test(c,a);
    }
  };
}
var retA = test(0); //undefined
retA.test(2); // 2 0 => 0
retA.test(4); // 4 0 => 0
retA.test(8); // 8 0 => 0
var retB = test(0).test(2).test(4).test(8); //undefined  | 2 0 => 0 | 4 2 => 2 | 8 4 => 4
var retC = test('good').test('bad');  //undefined | bad good => good
retC.test('good'); // good bad => bad
retC.test('bad'); // bad bad => bad

// var retA = test(0);  //===> undefined
// retA.test(2);  //===> 0
// retA.test(4);  //===> 0
// retA.test(8);  //===> 0
// var retB = test(0).test(2).test(4).test(8);  //===> undefined 0 2 4
// var retC = test('good').test('bad');  //===> undefined good
// retC.test('good');  //===>  bad
// retC.test('bad');   //===>  bad