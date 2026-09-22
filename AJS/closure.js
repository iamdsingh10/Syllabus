function calc(x){
    function mult1(y){
        return x*y;
    }
return mult1;
    function mult2(z){    // i guess two functions are not allowed
        return x+z;
    }
return mult2;

}

let func1= calc(3);
let func2= calc(4);

console.log(func1);
console.log(func1(4));
console.log(func1(5));

console.log(func2);
console.log(func2(7));
console.log(func2(10));