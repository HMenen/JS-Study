/**
 * loadsh中的get函数
 * @param {*} data 
 * @param {*} path 
 * @param {*} defaultValue 
 * @returns 
 */
function get(data, path, defaultValue = 0) {
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = data;
  for(let path of paths) {
    result = Object(result)[path];

    if (result === null) {
      return defaultValue
    }
  }
  return result;
}

let a = {a: {b: 1}}

console.log(get(a, 'a[b]'))