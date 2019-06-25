function getParent(child, parent) {
    function F() {};
    F.prototype = parent;
    child.prototype = new F();
    child.prototype.constructor = child;
}

function Animal () {
    let ha = 'animal111';
}
Animal.prototype.ha = 'qqqq';

function Dog () {}

getParent(Dog, Animal);
var dog = new Dog();
console.log(dog.ha);