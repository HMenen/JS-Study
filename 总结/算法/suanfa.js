function getArr(arr) {
  const a = arr.sort(() => Math.random() - 0.5);
  return a;
}

const arr = [1, 2, 3, 4, 5]
console.log('===', getArr(arr))


function reverse(list) {
  let head = list.head;
  let p = head;
  let q = p.next;
  let r = null;
  while(q.next) {
    r = q.next;
    q.next = p;
    q = p;
  }
  head = q;
}

function reverse(list) {
  let last = list;
  let current = last.next;
  while(current) {
    const temp = current;
    current = temp.next
    temp.next = last;
    last = temp;
  }
}

function reverse(list) {
  let last = list;
  let current = last.next;
  while (current) {
    const temp =  current;
    current = temp.next;
    temp.next = last;
  }
}


let list1 = {}
let a1 = {next: a2}
let a2 = {next: a3}
let a3 = {next: a3}

function reverse(list) {
  let last = list;
  let current = last.next;
  while(current) {
    let temp = current;
    current = current.next;
    temp.next = last;
  }
}