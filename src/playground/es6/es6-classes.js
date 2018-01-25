/**
 * classes purpose is to reuse code - it acts as a blueprint 
 * classes name are uppercase - just a good practice
 */


 class Person {

    constructor(name='Anonymous',age=0){
        this.name = name; // this refers to the Person - see es6-arrow-function.js for more about 'this'
    }
     // NB we should not put a comma - es6 method
    getGretting(){
      return `hi ${this.name}, is it ${this.age} your age ?`;
    }
 }

 const me = new Person('abdallah',40);// this is how we create an instance 
 const other = new Person();// this is another instance 


 //sub classing 

 class Student extends Person{

    constructor(name, age, major){
        super(name, age);
        this.major = major;

    }
    hasMajor(){
        return !!this.major; //!! is a technique e.g. !'' = true, !!'' = false , !!'abdallah' = true
    }
    getGretting(){
        let description = super.getGretting();
        if(this.hasMajor){
            description += `and you have ${this.major} as major  right!`
        }
        return desciption;
      }

 }

 const myStudent = new Person('abdallah',40,'mater in CS');// this is how we create an instance 
 console.log(myStudent.hasMajor());