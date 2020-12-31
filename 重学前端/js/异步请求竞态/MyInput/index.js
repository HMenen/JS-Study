import React, { useRef, useState } from 'react';
import { Input } from 'antd';
import SelectContent from './SelectContnent';
//1 => 1, 12 => 1, 123 => 0.5

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

async function getData(input) {
  if (input === '1') {
    await sleep(1000);
    return [{text: 1}];
  } else if (input === '12') {
    await sleep(1000);
    return [{text: 12}];
  } else if (input === '123') {
    await sleep(500);
    return [{text: 123}];
  }
}

const MyInput = props => {
  const [content, setContent] = useState([]);
  const version = useRef(0);

  const handleChanged = async(e) => {
    console.log('e===========', e.target.value);
    if (e.target.value.trim() === '') {
      setContent([])
    } else {
      //注意 version.current 和 v 的不等性，闭包的使用
      version.current++;
      let v = version.current;
      const res = await getData(e.target.value);
      if (v < version.current) return;
      setContent(res);
    }
  }

  return (
    <div style={{background: '#fff'}}>
      <Input onChange={handleChanged}/>
      <SelectContent content={content}/>
    </div>
  )
}

export default MyInput