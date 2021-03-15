// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
//  
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//  
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//  
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
//  
// 以此类推。

// 链接：https://www.jianshu.com/p/f1b7cb456d37


class LazyMan{
  constructor(name) {
    this.tasks = [];
    this.init = () => {
      console.log(`Hi This is ${name}`);
      this.next();
      return this;
    }
    this.tasks.push(this.init);
    this.next = () => {
      let task = this.tasks.shift();
      task && task();
    }
    setTimeout(this.next, 0);   //异步任务，事件循环机制
  }

  eat(food) { 
    let task = () => {
      console.log(`Eat ${food}~`);
      this.next();
    }
    this.tasks.push(task);
    return this;
  }

  sleep(delay) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
          this.next();
        }, delay);
      }
    this.tasks.push(task);
    return this;
  }

  sleepFirst(delay) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${delay}`);
          this.next();
        }, delay);
    };
    this.tasks.unshift(task);
    return this;
  }
}

function test(name) {
  return new LazyMan(name);
}

// test("Hank")
// test("Hank").eat("dinner").eat("supper");
// test("Hank").sleep(1000).eat("dinner");
test("Hank").sleepFirst(1000).eat("supper").eat("dinner");