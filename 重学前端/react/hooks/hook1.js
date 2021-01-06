let isMount = true;
let workInProgressHook = null;

var fiber = {
  stateNode: App,
  memorizedState: null
}

function useState(initialState) {
  let hook;
  if (isMount) {
    hook = {
      memorizedState: initialState,
      next: null,
      queue: {
        pending: null
      }
    }
    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;
      workInProgressHook = hook;
    } else {
      workInProgressHook.next = hook;
    }
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memorizedState;

  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;

    do{
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);

    hook.queue.pending = null;
  }

  hook.memorizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)]
}


function dispatchAction(queue, action) {
  const update = {
    action,
    next: null
  }
  if (queue.pending === null) {
    update.next = update;  // u0 -> u0 -> u0
  } else {
    update.next = queue.pending; //u1 => u0
    queue.pending.next = update; // u1 => u0 => u1
  }
  queue.pending = update;

  schedule();
}

function schedule() {
  workInProgressHook = fiber.memorizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function App() {
  const [num, updateNum] = useState(0);

  console.log('isMount', isMount);
  console.log('num', num);

  return({
    onClick() {
      updateNum(num => num + 1)
    }
  })
}

window.app = schedule();