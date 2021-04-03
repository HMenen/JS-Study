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
class LazyMan1{
  constructor(name) {
    this.tasks = [];
    this.init = () => {
      console.log(`Hi! This is ${name} !`);
      this.next();
      return this;
    }
    this.tasks.push(this.init);
    this.next = () => {
      let task = this.tasks.shift();
      task && task()
    }
    setTimeout(this.next, 0)
  }

  eat(food) {
    const func = () => {
      console.log(`Eat ${food}~`);
      this.next()
    }
    this.tasks.push(func);
    return this;
  }

  sleep(sleep) {
    const func = () => {
      setTimeout(() => {
        console.log(`Wake up after ${sleep}`);
        this.next()
      }, sleep)
    }
    this.tasks.push(func);
    return this;
  }

  sleepFirst(sleep) {
    const func = () => {
      setTimeout(() => {
        console.log(`Wake up after ${sleep}`);
        this.next();
      }, sleep)
    }
    this.tasks.unshift(func);
    return this;
  }

}

function test(name) {
  return new LazyMan1(name)
}
// test("Hank")
// test("Hank").eat("dinner")
// test("Hank").sleep(1000).eat("dinner");
test("Hank").sleepFirst(1000).eat("supper").eat("dinner");