/**
 * 保证同时运行到任务最多有两个
 */
class Scheduler{
  constructor() {
    this.tasks = [];
    this.processTasks = [];
  }
  
  add(promiseCreator) {
    return new Promise(resolve => {
      this.tasks.push({
        promiseCreator,
        resolve
      });
      this.handle();
    })
  }

  handle() {
    while(this.processTasks.length < 2 && this.tasks.length > 0) {
      const taskInfo = this.tasks.shift();
      this.processTasks.push(taskInfo.promiseCreator);
      taskInfo.promiseCreator().then(res => {
        taskInfo.resolve(res);
        this.removeTask(taskInfo.promiseCreator);
        this.handle();
      })
    }
  }

  removeTask(task) {
    this.processTasks = this.processTasks.filter(item => item !== task);
  }
}

const timeout = (time) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(time), time)
});

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');