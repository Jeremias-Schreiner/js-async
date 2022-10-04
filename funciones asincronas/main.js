const fnAsync = ()=>{
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve("Async!!",2000))
            : reject(new Error("Error!"))
    })
}

const fn2 = async ()=>{
    const something = await fnAsync()
    console.log(something)
    console.log("hola")
}



console.log('before')
fn2()
console.log('despues')
