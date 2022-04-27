function Shape() {}

Shape.prototype.draw = function () {
    console.log('draw');
};
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype); //assigning Parent prototype to Child prototype

Circle.prototype.constructor = Circle; // resetting the constructor back to Child function, ie Circle

let s1 = new Shape();
let c1 = new Circle();
