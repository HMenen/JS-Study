/**
 * 判断一个单词是否是回文
 * 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。
 * 比如 mamam redivider .
 * @param {string} str 
 */
function checkPalindrom (str) {
    let strArr = Array.prototype.slice.call(str);
    let strArrClone = Object.assign(strArr);
    strArrClone.reverse();
    if (strArr.join() == strArrClone.join()) {
        return true;
    }
    return false;
}

let str = 'asdf';
console.log(checkPalindrom(str));