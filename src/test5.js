//max = 5
// limit number, tasks: ['qwqw'], func
function request(str) {
  return new Promise();
}

function handleTasks(limit, tasks, request) {
  const processTasks = [];
  const taskSource = [...tasks];
  const result = [];
  function handle() {
    while(processTasks.length < limit && taskSource.length > 0) {
      let str = taskSource.shift();
      let task = request(str);
      task.then(res => {
        processTasks = processTasks.filter(item => item !== task);
        result.push(res);
        handle();
      });
      processTasks.push(task);
    }
    if (processTasks.length === 0 && taskSource.length === 0) {
      return new Promise((resolve, reject) => {
        resolve(result)
      })
    }
  }
  handle();
}
