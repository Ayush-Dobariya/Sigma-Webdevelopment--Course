//Async, Await and Fetch API
/* normalfunction */
/*
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`your result is ${Math.floor(Math.random() * 8) + 1}`)
        }, 3000);
    })
}
console.log('Loading mdules');
console.log('Do somthing else');
console.log('Load data');
let data = getData()
data.then((v) => {
    console.log(data);
    console.log('process data')
    console.log('task2');
})

*/
//Async Await function
async function getData() {
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(json => console.log(json))
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(`your result is ${Math.floor(Math.random() * 8) + 1}`)
    //     }, 3000);
    // })
}
async function main(){
console.log('Loading mdules');
console.log('Do somthing else');
console.log('Load data');
let data =  await getData()

    console.log(data);
    console.log('process data')
    console.log('task2');

}

main()

