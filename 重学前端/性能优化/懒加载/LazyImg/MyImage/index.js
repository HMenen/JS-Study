import React, { useState } from 'react';
import './index.css';

const MyImage = props => {
  const [isLoad, setIsLoad] = useState(false);

  return(
    <>
      <img
        className="image thumb"
        style={{visibility: isLoad? 'hidden': 'visible'}}
        src={props.thumbsrc}
      />
      <img
        onLoad={() => setIsLoad(true)}
        className="image full"
        style={{opacity: isLoad? 1: 0}}
        src={props.src}
      />
    </>
  )
}

export default MyImage;