var str = '111';
var n1 = 123111;
var arr = [1, 2, 3];
// 元组类型（tuple）  属于数组的一种
var rr001 = [1, '121'];
rr001[1] = '1';
console.log(str);
console.log(rr001);
/*语法，就是后台经常用的那个状态码 1表示啥 2表示是啥（举个栗子）
    enum 枚举名{
        标识符[=整型常数],
        标识符[=整型常数],
        ...
        标识符[=整型常数],
    } ;
    */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s);
