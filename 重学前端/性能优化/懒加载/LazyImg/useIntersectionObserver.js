import { useEffect } from 'react';

/**
 * @param {*} props 
 * threshold: 用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是[0]。
 * 用来扩大或者缩小视窗的的大小，使用css的定义方法，10px 10px 30px 20px表示top、right、bottom 和 left的值
 * root元素只有在rootMargin为空的时候才是绝对的视窗。
 */

// time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
// target：被观察的目标元素，是一个 DOM 节点对象
// rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
// boundingClientRect：目标元素的矩形区域的信息
// intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
// intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0

const useIntersectionObserver = props => {
  const { callback, target, root } = props
  const threshold = 0.1, rootMargin = "0px";

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
      root: root || null
    });
    observer.observe(target.current);
    return () => observer.unobserve(target.current);
  }, [])

}

export default useIntersectionObserver;