var str:string = '111';
var n1:number = 123111;

var arr:Array<number> =  [1, 2, 3];

// 元组类型（tuple）  属于数组的一种
let rr001:[number, string] = [1, '121'];
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
 
     
enum Flag {
  success=1,
  error=2
};

let s:Flag=Flag.success;
console.log(s);


// 任意类型（any）这尼玛就相当于  无敌的存在
var num001:any=123;
num001='str';
num001=true;