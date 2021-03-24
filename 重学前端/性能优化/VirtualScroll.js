import React, { useRef, useState, useLayoutEffect } from 'react';
import { Select, Divider } from 'antd';

const { Option } = Select;

const VirtualScroll  = (props) => {
  const data = new Array(1000);
  for(let i = 0; i < 1000; i++) {
    data[i] = i;
  }
  const elementHeight = 20;
  const ulHeight = data.length * 10;
  const wrapRef = useRef(null);
  const wrapRefSelect = useRef(null);
  let wrapHeight = 0;
  let firstShowIndex = 0;
  const [wrapSrollTop, setWrapSrollTop] = useState(0);
  const [showElementNum, setShowElementNum] = useState(0);
  let elementContents = new Array(showElementNum).fill(null);
  
  useLayoutEffect(() => {
    wrapHeight = wrapRef.current.clientHeight;
    setShowElementNum(wrapHeight / elementHeight + 10);
    setContent();
  }, []);

  function setContent() {
    setWrapSrollTop(wrapRef.current.scrollTop);
  }
  
  firstShowIndex = parseInt(wrapSrollTop / elementHeight)

  elementContents = elementContents.map((item, index) => {
    const elementIndex = index + firstShowIndex;
    const topHeight = elementIndex * elementHeight;
    return <div style={{position: 'absolute', top: topHeight}} key={index} value={index}>
      {data[elementIndex]}
    </div>;
  });

  return(
    <div>
      <div>
        <div style={{height: 100, backgroundColor: '#fff', overflow: 'auto'}} ref={wrapRef} onScroll={setContent}>
          <ul style={{height: ulHeight, position: 'relative'}}>
            {elementContents}
          </ul>
        </div>
      </div>
      {/* <Select style={{width: 200}} dropdownRender={() => (
          <div onMouseDown={e => e.preventDefault()} style={{height: 100, backgroundColor: '#fff', overflow: 'auto'}} onScroll={setContent}>
            <ul style={{height: ulHeight, position: 'relative'}}>
              {elementContents}
            </ul>
          </div>
        )}>
      </Select> */}
    </div>
  )
}

export default VirtualScroll;