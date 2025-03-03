// synchronous callbacks

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function greetVishwas(gr){
//     const name = 'Vishwas'
//     gr(name)
// }

// greetVishwas(greet)


// anchronous callbacks

function greet(name){
    console.log(`Hello ${name}`);
}

setTimeout(greet, 2000, 'aditya')

function callback(){
    console.log('Hello World');
}

console.log('Hello dunia');
