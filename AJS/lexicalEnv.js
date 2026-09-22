let name =  'deepak';
// it is not accessible because it is declared using let which is block level
function first(){
    let lname= 'singh';
    second(name,lname);   // so i passed every detail as parameter
}

function second(name,lname){
    let age=23;
    third(name,lname,age);
}

function third(name,lname,age){    /
    let gender= 'male';
    console.log(name, lname, age, gender);

}

first();