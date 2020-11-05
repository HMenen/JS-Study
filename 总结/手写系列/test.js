


Promise.all = function(arr) {
  return Promise((reslved, rejected) => {
    let i = 0;
    let values = [];
    next();
    function next() {
      let p =  arr[i];
      if (typeof p.then === 'function') {
        p.then(res => {
          values[i] = res;
          i++;
          if (i === arr.length) {
            reslved(values);
          } else {
            next();
          }
        }, err => {
          values[i] = err;
          i++;
          if (i === arr.length) {
            rejected(err);
          } else {
            next();
          }
        })
      } else {
        values[i] = p;
        i++;
        if (i === arr.length) {
          reslved(values);
        } else {
          next();
        }
      }
    }
  });
}