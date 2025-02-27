// function sayName(myName = "Aditya", lastName = myName.toUpperCase()){
//     console.log("My name is ", myName, lastName);
// }

// sayName()


// function solve(value={age:78, wt:157, ht:193}){
//     console.log('Hello', value.age, value.wt, value.ht);
    
// }

// solve()


// function solve(value=[ "Aditya", "Singh", "Bhadauriya"]){
//     console.log('Hello', value[1], value[2],value[0]);
    
// }

// solve()


function getAge(){
    return 190;
}

function utility(name,age = getAge()){
    console.log(name, " ", age);
}

utility('aditya')