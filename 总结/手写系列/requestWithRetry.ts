import logger from '../logger';

async function requestWithRetry<T>(params: {
  request: () => Promise<T>;
  times?: number;
  errorValue?: T;
  interval?: number;
}): Promise<T | undefined> {
  const { request, errorValue, times = 2, interval = 50 } = params;
  try {
    return await request();
  } catch (error) {
    if (times > 0) {
      await new Promise(resolve => setTimeout(resolve, interval));
      return requestWithRetry({
        request,
        times: times - 1,
        interval,
        errorValue,
      });
    } else {
      logger.error('requestWithRetry', 'error', error as Error)
      return Promise.resolve(errorValue);
    }
  }
}

export default requestWithRetry;
