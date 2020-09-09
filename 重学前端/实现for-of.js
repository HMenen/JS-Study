var  o = new Object;
o[Symbol.iterator] = function () {
  let n = 0;
  return {
    next: function() {
      return { value: n++, done: n > 10}
    }
  }
}

for (let v of o) {
  console.log(v)
}