class User{
    constructor(name){   // without constructor we cannot do this thing
        this.abc= name;
    }

    // instance
    naming(name){
        return name + "  is my name";
    }

    //static method   it is accessible with in the class 
    static getUser(x){
        return x + ' !hye bitch';
    }
}

let bad= new User('deepak');
console.log(bad.naming('swati'));
console.log(User.getUser(bad.abc));