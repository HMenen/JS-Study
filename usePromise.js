import React from 'react';

export default function usePromise(promise) {
  const [error, setError] = React.useState(null);
  const [result, setResult] = React.useState(null);

  React.useEffect(
    () => {
      let canceled = false;

      promise
        .then(r => {
          if (!canceled) {
            setResult(r);
          }
        })
        .catch(e => {
          if (!canceled) {
            setError(e);
          }
        });

      return () => {
        canceled = true;
      };
    },
    [promise]
  );

  return [result, error];
}