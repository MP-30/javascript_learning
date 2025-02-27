class Human{
    // properties
    age;
    #wt = 80;
    ht = 140;
    // behavious

    constructor(newAge, newHeight, newWeight){
        this.age = newAge
        this.ht = newHeight
        this.#wt = newWeight
    }

    walking(){
        console.log("I am walking", this.#wt);
        
    }

    running (){
        console.log("I am running");
        
    }
    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt = val
    }
}

let obj = new Human(50, 120,110);
console.log(obj.ht);
console.log(obj.fetchWeight);
console.log(obj.age);

obj.walking();
