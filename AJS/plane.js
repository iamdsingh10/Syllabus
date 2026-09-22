/*
DAY-3 Question

Write a code to implement the below mentioned task.

- Write an Airplane constructor that initializes `name` from an argument.
- All airplanes built with Airplane should initialize with an `isFlying` of false.

- Give airplanes the ability to `.takeOff()` and `.land()`:
+ If a plane takes off, its `isFlying` property is set to true.
+ If a plane lands, its `isFlying` property is set to false.
*/

class Airplane{
    constructor(name){
        this.name=name;
        this.isFlying= false;
    }
    takeOff(){
        this.isFlying= true;
    }
    land(){
        this.isFlying= false;
    }
    // if Airplane is flying or not

    airplaneFlyingOrNot(){
        return this.isFlying;
    }
}


const airDetails = new Airplane('indigo');
console.log(airDetails);   // plane is not flying initially  
airDetails.takeOff();  // plane takes off 
console.log(airDetails);  // so plane is flying
airDetails.land();   // plane lands 
console.log(airDetails);  // plane is not flying
airDetails.airplaneFlyingOrNot();  // checking plane is flying or not 
console.log(airDetails);  // as initially plane is not flying so it is also not flying
console.log(airDetails.airplaneFlyingOrNot());  // here i am only calling the method so name is not appearing
