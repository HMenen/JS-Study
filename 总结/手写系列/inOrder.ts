// 保证返回结果有序
function requestInOrder<I extends any[], R>(
  fn: (...args: I) => R
): (...args: I) => Promise<R> {
  let queryVersion = 0;
  let latestResponseVersion = 0;
  let latestResult: null | R = null;
  return async function (...payload: I): Promise<R> {
    queryVersion += 1;
    const thisVersion = queryVersion;
    const result = await fn(...payload);
    if (thisVersion <= latestResponseVersion) {
      return latestResult as R;
    }
    latestResponseVersion = thisVersion;
    latestResult = result;
    return latestResult;
  };
}

export default requestInOrder;
