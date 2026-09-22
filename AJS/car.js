/* 
DAY-4 Questions


Write a code to implement the below mentioned task.
Task:
1. Write a Car constructor that initializes 'model' and 'milesPerGallon' from arguments.

2. . All instances built with Car:

a. should initialize with an 'tank' at 0

b. should initialize with an 'odometer' at 0

3. Give cars the ability to get fueled with a '.fill(gallons)' method. Add the gallons to 'tank'.

4. Give cars ability to '.drive(distance)'. The distance driven:

a. Should cause the 'odometer' to go up.

b. Should cause the the 'tank' to go down taking 'milesPerGallon' into account.

5. A car which runs out of 'fuel' while driving can't drive any more distance:

a. The 'drive' method should return a string "I ran out of fuel at x miles!" x being 'odometer'
*/

class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

//     fill(gallons){
// this.tank= this.tank + gallons;
//     }
//     drive(distance){
//         if(this.tank = 0 || this.tank - milesPerGallon <= 0)
//             return `I ran out of fuel at ${this.tank}  being ${this.odometer}`
// this.odometer = this.odometer + distance;
// this.tank = this.distance/this.milesPerGallon;
//     }
}
  // in this way also we can add method to the class 
Car.prototype.fill= function(gallons){
    this.tank = this.tank + gallons
}
Car.prototype.drive = function(distance){
    console.log(this.tank, distance, this.milesPerGallon)
    this.odometer = this.odometer + distance;
    this.tank = distance / this.milesPerGallon;
    if(this.tank = 0  || this.tank - this.milesPerGallon <=0){
        return `I ran out of fuel at ${this.tank} being ${this.odometer}`
    }
    // this.odometer = this.odometer + distance;
    // this.tank = distance / this.milesPerGallon;
}

const audi = new Car('s1', 20);
audi.fill(10);
console.log(audi.drive(60));