// promises

const promiseExample = new Promise((resolve, reject) =>{
    // const timeHandler = () => {
    //     const fortuna = Math.random()
    //     if (fortuna > 0.5){
    //         resolve(fortuna)
    //     } else {
    //         reject(fortuna)
    //     }  
    // }
    // setTimeout( timeHandler, 1000)

    const fortuna = Math.random()
    resolve(fortuna)
})

const callBackForPromiseFulfilled = (data) => {console.log('Размер ' + data)}

promiseExample
.then(callBackForPromiseFulfilled)
console.log(promiseExample)

// fetch - метод для запроса в сеть

// fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {console.log(response)})


'============================================================================='
// const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(fetchResult)

// fetchResult.then((response) => {console.log(response)})
// .then((data) => {console.log(data)})
'============================================================================='

const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');

console.log(fetchResult);

fetchResult
    .then((response) => {return response.json()})
    .then((data) => {
        const arraySlice = data.slice(0, 4)
        console.log(arraySlice)
        // return arraySlice
    })
    .catch((error) => {console.log(error)})
    .finally(() => {console.log('Ураааа')})
