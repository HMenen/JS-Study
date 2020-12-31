function myInstanceOf(left, right) {
  let leftProto = left.__proto__;
  while(leftProto) {
    if (leftProto === right.prototype) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
  return false;
}