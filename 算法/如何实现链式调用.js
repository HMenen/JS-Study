global.a = function () {
  console.log('a');
  return this;
}

global.b = function () {
  console.log('b');
  return this;
}

global.c = function () {
  console.log('c');
  return this;
}

a().b().c()
