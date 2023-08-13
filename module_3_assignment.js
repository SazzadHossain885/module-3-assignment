// Problem 1 Solution
function printObjectProperties(obj){
    if(Object.keys(obj).length == 0){
        console.log("Object is empty.");
        return;
    }
    for(key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}

printObjectProperties({type:"Fiat", model:"500", color:"white"})
printObjectProperties({});


// Problem 2 Solution
function findMaxNumber(numbers){
    if(numbers.length == 0){
        return null;
    }
    return Math.max(...numbers);
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30
const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15
const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null



// Problem 3 Solution
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));



// Problem 4 Solution
const calculateSquare = (num) => num * num;

console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64



// Problem 5 Solution
function doubleNumbers(numbers){
    return numbers.map( (num) => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10] 



// Problem 6 Solution
class MathUtility{
    static multiply(a, b){
        return a * b;
    }
} 

console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16



// Problem 7 Solution
class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(this.sound);
    }
} 

class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"



// Problem 8 Solution
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
} 

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}`);
    }
} 

const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."