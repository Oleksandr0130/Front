const urlApi = 'https://jsonplaceholder.typicode.com/todos'
let dataResponse


// async function getData(){
    
    // }

    const getData = async (api) => {
        const serverResponse = await fetch(api)
        dataResponse = await serverResponse.json()
        dataWork(dataResponse)
    }
    getData(urlApi)

    function dataWork(data){
        console.log(data)
    }

    //=========== обработка ошибок ============

//     const getData = async (api) => {
//         try {
//         const serverResponse = await fetch(api)
//         dataResponse = await serverResponse.json()
//         dataWork(dataResponse)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
//     function dataWork(data){
//         console.log(data)
//     }