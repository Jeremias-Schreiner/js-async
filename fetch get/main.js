const URL_API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi)
}


// fetchData(`${URL_API}/products`)
//     .then(response => {
//         //La respuesta
//         console.group()
//             console.log('La respuesta es:')
//             console.log(response)
//         console.groupEnd()

//         //Tipo de dato de la respuesta
//         console.group()
//             console.log('El tipo de la respuesta es:')
//             console.log(typeof(response))
//         console.groupEnd()

//         //La resuesta transformada a JSON
//         return response.json()    
//     })
//     .then(products =>{
//         console.group()
//             for (product of products){
//                 console.log(product)
//             }

//         console.groupEnd()
//     })
//     .catch(error => console.error(error))


fetchData(`${URL_API}/products`)
    .then(response => response.json())
    .then(products =>{
        return fetchData(`${URL_API}/products/${products[1].id}`)
    })
    .then(responseProduct => responseProduct.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${URL_API}/categories/${product.category.id}`)
    })
    .then(responseProduct => responseProduct.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.error(error))
    .finally(()=> console.log('Operacion terminada'))