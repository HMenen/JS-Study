import React, { useLayoutEffect, useRef } from 'react';

export default function refManager() {
  const refs = [];

  function HocCollectRef(props) {
    let ref = useRef();
    useLayoutEffect(() => {
      refs.push(ref);
      return () => {
        const index = refs.indexOf(ref);
        refs.splice(index, 1);
      };
    }, []);

    const children = React.Children.only(props.children);
    if (children.ref) {
      ref = children.ref;
    }
    return(
      React.cloneElement(children, {
        ref
      })
    );
  }
  
  return {
    refs,
    HocCollectRef
  };
}