// Factory pattern
function createCat(age,name){
  var o = new Object();
  o.age = age;
  o.name=name;
  o.run = function() {
    console.log(o.name + "   running...")
  }

  return o;
}
var c = createCat(19,'ddddg');

// Constructor Pattern

function Cat(age,name){
  this.age = age;
  this.name = name;
  this.run = function(){
    console.log(this.name + '  running..')
  }
}

var c1 = new Cat(22,'ss');
var c2 = new Cat(19,'dd');
console.log(c1);

//c1 instanceof Cat
//true
//c1.constructor === Cat
//everytime when creating instances, they would all have their own method, which is redundant.

// Prototype pattern

function Cat(){
  this.age = 10;
}

Cat.prototype.run = function(){
  console.log(this.name, this.age);
}
Cat.prototype.name ="black cat!";

var c3= new Cat();
var c4= new Cat();
console.log(c3.run === c4.run)

// combination inheritance

//parent
function Animal(age, name){
  this.age= age;
  this.name = name;
  this.foods = [1,2,3]
}
Animal.prototype.run = function(){
  console.log(this.name + this.age);
}
// Child

function Cat(age, name){
  Animal.call(this,age,name);
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

vat c = new Cat(19, "detail")
