/**
 *  = 右面 的值 必须全覆盖
 * @param {*} param0 
 */
function fn1({x = 0, y = 1} = {}) {
  console.log('x1---', x, 'y1---', y)
}

function fn2({x, y} = {x: 0, y: 0}) {
  console.log('x2---', x, 'y2---', y)
}

function fn3({x = 0, y = 1} = {x: 2, y: 3}) {
  console.log('x2---', x, 'y2---', y)
}

// fn1({x: 2, y: 3});   x1--- 2 y1--- 3
// fn1({x: 2});   x1--- 2 y1--- 1
// fn1({y: 3});   x1--- 0 y1--- 3
// fn1({});   x1--- 0 y1--- 1
// fn1();   x1--- 0 y1--- 1

// fn2({x: 2, y: 3});   //x1--- 2 y1--- 3
// fn2({x: 2});   //x1--- 2 y1--- undefined
// fn2({y: 3});   //x1--- undefined y1--- 3
// fn2({});   //x1--- undefined y1--- undefined
// fn2();   //x1--- 0 y1--- 0

fn3({x: 5, y: 6});   //x1--- 5  y1--- 6
fn3({x: 5});   //x1--- 5   y1--- 1
fn3({y: 6});   //x1--- 0   y1--- 6
fn3({});   //x1--- 0   y1--- 1
fn3();   //x1--- 2   y1--- 3


var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1


var x = 1;
function foo(x, y = function() { x = 2; }) {
  x = 3;
  y();
  console.log(x);
}

foo() // 2
x // 1