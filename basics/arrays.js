// let obj = {
//     nama : "Love",
//     "full name": "Aditya singh",
//     age : 78,
//     weight: 510,
//     greet : function(a){
//         console.log("hello hi how are you",a);
//     }  
// };


// console.log(obj)
// obj.greet(1);
// obj.greet(2);
// console.log(typeof(obj));


// arrays

// let arr = [1,2,3,4,5]

// // console.log(arr);

// let brr = new Array('love', 1, true)
// brr.push('singh')
// console.log(brr);
// brr.push(45)
// brr.push(75)
// brr.push(65)
// console.log(brr);
// // brr.pop()
// // console.log(brr.slice(1,3));
// brr.splice(2,3,'aditya');
// console.log(brr);


// let arr = [14,24,65]

// let arr1 = arr.map((number) => {
//     return number*number
// })

// console.log(arr1);

// let arr = [10,20,31,41,50,60,70];

// let answer = arr.filter((number) =>{
//     if (number % 2 ==0){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(answer);


// let arr = [1,2,'aditya', 'singh', null]

// let answer = arr.filter((value) => {
//     if (typeof(value)== 'string'){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(answer)



// reduce
// arr = [10,20,30,40]

// let ans = arr.reduce((acc,curr) => {
//     return acc + curr
// },0)

// console.log(ans);


// sort

// let arr = [9,1,7,2,8];
// arr.sort((a,b) => b-a);
// console.log(arr);


// index of

// let arr = [9,5,2,3,7,1]

// console.log(arr.indexOf(5));


// for each

// let arr = [10,20,30,40];
// arr.forEach((value, index)=>{
//     console.log("Number:", value +"and index is " + index)
// })