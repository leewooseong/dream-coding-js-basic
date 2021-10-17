'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Calss declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        //if (value < 0) {
        //    throw Error('age can not be negative');
        //}
        this._age = value < 0 ? 0 : value;
    }

}
const user1 = new User('Steve', 'Job', -1);
// getter와 setter를 이용하기 때문에 .age와 .age에 값을 할당할 수 있다.
console.log(user1.age)

// 3. Fields (public, #private)
// Too soon! -> babel을 이용하여야한다. 쓰기에 너무 이르다.
// https://developer.mozila.org/
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding'
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// static은 object마다 할당되는 것 x, class자체에 붙어있다.
//console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('▲')
    }

    getArea() {
        return (this.width * this.height) / 2; 
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle);  // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object);    // t -> JS에서 만들어지는 모든 Object, class는 Object를 상속받아서 만든 것! 자세한 내용을 보고 싶다면 'ctrl + click!'을 이용하여 내부가 어떻게 생긴지 볼 수 있다.
