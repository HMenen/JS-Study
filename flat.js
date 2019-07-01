// function flat(arr) {
//     return arr.reduce((pre, cur) => {
//         console.log('-----pre-----' + pre);
//         console.log('-----cur-----' + cur);
//       return [...pre, ...(Array.isArray(cur) ? flat(cur) : [cur])];
//     }, []);
//   }
  

let arr = [[[3, 4], [5, 6], [7, [8, 9]]], [[3, 4], [5, 6]]];

/**
 * flat递归实现
 * @param {Array} arr 
 */
function flat (arr) {
    return arr.reduce((prev, cur) =>{
        return [...prev, ...(Array.isArray(cur) ? flat(cur) : [cur])];
    }, [])
}

/**
 * flat非递归实现
 * @param {Array} arr 
 */
function flat1 (arr) {
    let ret = [];
    let s = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        s.push(arr[i]);
    }
    while (s.length > 0) {
        let obj = s.pop();
        if (Array.isArray(obj)) {
            for (let i = obj.length - 1; i >=0; i--) {
                s.push(obj[i]);
            }
        } else {
            ret.push(obj);
        }
    }
    return ret;
}
// console.log(arr);
console.log(flat(arr));
console.log(flat1(arr));