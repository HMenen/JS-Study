import React from 'react'
import { render } from 'react-dom'
import Demo1 from './Demo1';
import './demo1.less';

class Hello extends React.Component {
    render() {
       return (
           <Demo1/>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)   