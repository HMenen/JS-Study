import React from 'react';

const withHandleRef = (WrappedComponent) => {
  const myRef = React.createRef();
  class HOC extends React.Component{
    render() {
      const { myRef, ...otherProps } = this.props;
      return(
        <WrappedComponent ref={myRef} {...otherProps} />
      );
    }
  }
  console.log('-----', myRef);
  return React.forwardRef((props, ref) => {
    return <HOC myRef={ref} {...props}/>;
  });
};

export default withHandleRef;