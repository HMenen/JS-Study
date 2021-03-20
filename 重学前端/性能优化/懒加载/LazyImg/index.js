import React, { useRef } from 'react';
import images from "./images.json";
import ImageContainer from './ImageContainer';
import './index.css';

const LazyImg = props => {
  const rootRef = useRef();
  return (
    <div className='lazyimg-container' ref={rootRef}>
      {
        images.map(res => (
          <div key={res.id} className="wrapper">
            <ImageContainer
              src={res.url}
              // thumb={res.urls.thumb}
              height={res.height}
              width={res.width}
              // alt={res.alt_description}
              rootRef={rootRef}
              thumbsrc={res.thumbsrc}
            />
          </div>
        ))
      }
    </div>
  )
}

export default LazyImg;