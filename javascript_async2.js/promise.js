//  resolve
// let food_truck = 'found1'
// const promise = new Promise((resolve, reject) =>{
//     if(food_truck == 'found'){
//         setTimeout(() =>{
//             resolve()
//             console.log('resolved');
//         }, 5000 )
//     }
//     else if(food_truck != 'found'){
//         setTimeout(()=>{
//             reject()
//             console.log('not resolved');
//         },5000)
//     }
// })

const { reject } = require("async");



// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         // Food truck found
//         // Change status form 'pending' to 'fullfilled'
//         resolve('Bringing tacos')
//     },5000)
// })

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         // Food truck not found
//         // Change status from 'pending' to 'rejected'
//         reject('Not bringing tacos. Food truck not there.')
//     },5000)
// })

// promise.then(onFullfillment)
// promise.catch(onRejection)


// const onFullfillment = (result) => {
//     // resolve was called
//     console.log(result);
//     console.log('Set up the table to eat tacos')    
// }

// const onRejection = (error) => {
//     // reject was called
//     console.log(error)
//     console.log('Start cooking pasta')
// }


// Example funciton returning a promise
function checkFoodTruckStatus(truckId){
    return new Promise((resolve, reject)=>{
        console.log(`Checking status of food truck ${truckId}`);

        // simulate asynchronous operation with setTimeout
        setTimeout(()=>{
            const truck = {
                '1': 'found',
                '2': 'not found'
            };

            if (truck[truckId] == 'found'){
                console.log(`Food truck ${truckId} found.`);
                resolve('Bringing tacos!')
            }else {
                console.error(`Food truck ${truckId} not found.`);
                reject(new Error(`Food truck not there.`));
            }
        },3000); 
    })
}

// Function to set up the table when tacos are available
function setUpTable(message){
    return new Promise((resolve, reject)=>{
        console.log(`${message} setting up the table`);

        setTimeout(() => {
            resolve(`Table is ready!`);
        },2000);
    });
}

// Function to start cooking pasta in case of rejection

function startCookingPasta(error){
    return new Promise ((resolve, reject)=>{
        console.log(`${error.message} Let's cook some pasta instead.`);

        setTimeout(()=> {
            resolve(`Pasta is ready!`);
        },3000);
    });
}

// Use the checkFood TruckStatus function and handle its result

checkFoodTruckStatus('1')
    .then(setUpTable) //If promise resolves, set up the table
    .then((setupMesssage)=> {
        console.log(`${setupMesssage} Time to eat!`);
    })
    .catch(startCookingPasta) //If promise rejects, start cooking pasta
    .then((pastaMessage)=> {
        console.log(`${pastaMessage} Enjoy your meal!`);
    });

// Run the same with a rejected case for demonstration

console.log('Checking another truck...');
checkFoodTruckStatus('2')
    .then(setUpTable)
    .catch(startCookingPasta)
    .then((pastaMessage) => {
        console.log(`${pastaMessage} Enjoy your meal!`)
    })