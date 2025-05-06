console.log('this is promises');

let promise = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a > 0.5) {
    
        reject('Promise rejected')
    }else{
    setTimeout(() => {
        console.log('Hello');
        resolve(
            'Jasprit Bumrah'
        )
    }, 1000);
}
})
   

promise.then((a)=>{
    console.log(a)
}).catch((error)=>{
    console.log(error)
})