// for in

let obj = {
    name : 'Aditya',
    age : 24,
    weight: 94,
    height: "6 ft",
    greet: function (){
        console.log("i am a very good programer")
    }
}

// for(let key in obj){
//     console.log(key, " ", obj[key]);
    
// }

// for of loop

// let arr = [10,30,20,50]
// for(let value of arr){
//     console.log(value);
// }

// let fullName = 'aditya';
// for (let value of fullName){
//     console.log(value);
    
// }



// let arr = [10,20,30,40]

// function getSum(arr){
//     let lenh = arr.length;
//     let sum = 0
//     for (let index=0; index<lenh; index++){
//         sum = sum + arr[index]
//     }
//     return sum
// }

// let totalSum = getSum(arr)
// console.log(totalSum);


let arr = [10,20,30,40]

function getSum(arr){
    let sum = 0;
    arr.forEach((element) => {
        sum = sum + element
     } 
    );return sum 
}

let totalSum = getSum(arr)
console.log(totalSum);
