import React from 'react';
import { Input } from 'antd';

const SelectContent = props => {
  return (
    <div style={{background: '#fff'}}>
      {
        props.content.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))
      }
    </div>
  )
}

export default SelectContent