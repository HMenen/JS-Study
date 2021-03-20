import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import MyImage from '../MyImage';
import './index.css';

const ImageContainer = props => {
  const { height, width, src, rootRef, thumbsrc } = props;
  const aspectRatio = (width / height) * 100;
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useIntersectionObserver({
    root: rootRef.current,
    target: imgRef,
    callback: (entries, observerElement) => {
      console.log('------', entries[0].isIntersecting, observerElement);
      if (entries[0].isIntersecting) {
        observerElement.unobserve(imgRef.current);
        setIsVisible(true);
      }
    }
  });

  return(
    // <div ref={imgRef} className="image-container" style={{paddingBottom: `${aspectRatio}%`}}>
    <div ref={imgRef} className="image-container">
      {/* {isVisible && <img src={src} className='image'/>} */}
      {isVisible && <MyImage src={src} thumbsrc={thumbsrc}/>}
    </div>
  )
}

export default ImageContainer;