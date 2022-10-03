const URL_API = 'https://api.escuelajs.co/api/v1';

function postData(url, data){
    const response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response
}

const data = {
    "title": "New hyper Product",
    price: 1500,
    description: "Besto product",
    categoryId: 1,
    images: [
        "https://placeimg.com/640/480/any",
    ]
}

postData(`${URL_API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))


