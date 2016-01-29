"use strict";

// 1. Конструктор Animal
function Animal(name) {
  this.name = name;
}

// 1.1. Методы -- в прототип
Animal.prototype.getName = function() {
  return this.name;
}

// 2. Конструктор Dog
function Dog(name) {
  Animal.apply(this, arguments);
}

// 2.1. Наследование
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 2.2. Методы Dog
Dog.prototype.bark = function() {
  return 'Dog '+ this.name + ' is barking';
}

var dog = new Dog ('Aban');
alert(dog.getName() === 'Aban');
alert(dog.bark() === 'Dog Aban is barking');
