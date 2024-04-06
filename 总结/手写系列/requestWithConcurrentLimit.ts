const MAX_CONCURRENCY = 5;

async function requestWithConcurrentLimit<T>(
  tasks: (() => Promise<T>)[], 
  maxConcurrencyCount?: number,
) {
  const concurrencyCount = maxConcurrencyCount ?? MAX_CONCURRENCY;
  const result = [];
  const executing = [] as Promise<T>[];

  for (const task of tasks) {
    const promise = Promise.resolve().then(() => task());
    result.push(promise);
    if (tasks.length >= concurrencyCount) {
      const executePromise = promise.then(() => executing.splice(executing.indexOf(executePromise), 1)) as Promise<T>;
      executing.push(executePromise);
      if (executing.length >= concurrencyCount) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(result);
}

export default requestWithConcurrentLimit;
