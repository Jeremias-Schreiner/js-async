const URL = 'https://api.escuelajs.co/api/v1/products';
const request = new XMLHttpRequest();
let productsContainer = document.querySelector('.procucts-container')
request.open('GET', URL);
request.send()

//Muestra toda la informacion de un solo producto
function showProduct(product){
    console.groupCollapsed()
        console.log(
                'id: '+product.id +'\n',
                'title '+product.title+'\n',
                'price '+product.price+'\n',
                'category_id '+product.category.id+'\n',
                'category_name '+product.category.name+'\n',
                'category_img '+product.category.image+'\n'
        )
        for (image of product.images){
            console.log("image "+image+'\n')  
        }
    console.groupEnd()
}


function createProductCard(product){
    //Contenedor de productos
    const productContainer = document.createElement('div')
    productContainer.classList.add('product-container')

    //imagen del producto
    const productImage = document.createElement('img')
    productImage.classList.add('product-img')
    productImage.src = product.images[0]
    productImage.alt = product.title

    //Contenedor de la informacion del producto
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    //titulo del producto
    const title = document.createElement('h2')
    title.classList.add('title')
    title.innerText = product.title

    //Categoria del producto
    const category = document.createElement('h3')
    category.classList.add('category')
    category.innerText = `Category: ${product.category.name}` 


    //Contenedor de Precio
    const priceContainer = document.createElement('div')
    priceContainer.classList.add('price-container')

    //Precio
    const price = document.createElement('p')
    price.classList.add('price')
    price.innerText =`$${product.price}`

    //Elementos creados: productContainer, productImage, productInfo, title, category, priceContainer, price
    //Insertar contenido en el HTML
    const documentFragment = document.createDocumentFragment()
    documentFragment.appendChild(productContainer)
    productContainer.append(productImage, productInfo, priceContainer)
    productInfo.append(title, category)
    priceContainer.appendChild(price)

    productsContainer.appendChild(documentFragment)


}

request.onreadystatechange = ()=>{
    if (request.readyState === 4){
        if (request.status === 200){
            const products = JSON.parse(request.response)

            for (product of products){
                showProduct(product);
                createProductCard(product)
            }
        }
    }
}


