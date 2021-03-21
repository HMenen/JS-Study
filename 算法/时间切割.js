function splitTime() {
  let result = [];
  for(let i = 0; i < 24; i++) {
    let hour = i;
    let prevTime = hour + ":00";
    let curTime;
    for(let j = 15; j <=60; j += 15) {
      if (j !== 60) {
        curTime = hour + ':' + j;
      } else {
        hour = i + 1;
        curTime = hour + ':00';
      }
      result.push(prevTime + '--' + curTime);
      prevTime = curTime;
    }
  }
  return result
}

console.log(splitTime())