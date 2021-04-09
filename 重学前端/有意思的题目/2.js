let a = 0;
function b(cb) {
  var a = 1;
  console.log(this)
  cb()
}

function aa() {
  console.log(a)
}
var a1 = b(aa); // 0  this 是window