const clickButton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody');
let carrito = []


clickButton.forEach(btn =>{
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const nuevoItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(nuevoItem);
}

function addItemCarrito(nuevoItem) {
    const inputElemento = tbody.getElementsByClassName('input__elemento')
    for(let i=0; i < carrito.length ; i++){
        if(carrito[i].title.trim() === nuevoItem.title.trim()) {
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            carritoTotal();
            return null;
        }
    }
    carrito.push(nuevoItem)
    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const content = `
        <th scope="row">1</th>
                <td class="table__productos">
                  <img src=${item.img} alt="foto de comida">
                  <h6 class="title">${item.title}</h6>
                </td>
                <td class="table__precio">
                  <p>${item.precio}</p>
                </td>
                <td class="table__cantidad">
                  <input type="number" min="1" max="5"value=${item.cantidad} class="input__elemento">
                  <button class="delete btn btn-danger">X</button>
                </td>
        `

        tr.innerHTML = content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    carritoTotal();
}

function carritoTotal(){
    let total = 0
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio*item.cantidad
    }) 
    itemCartTotal.innerHTML = `Total $${total}`
    addLocalStorage()
}

function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i< carrito.length ; i++){
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    carritoTotal();
}

function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value
            carritoTotal();
        }
    })
    
}


function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}

let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}

// LIBRARY ALERT 

const btn1 = document.getElementById("buttonCarrito");

btn1.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn2 = document.getElementById("buttonCarrito2");

btn2.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn3 = document.getElementById("buttonCarrito3");

btn3.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn4 = document.getElementById("buttonCarrito4");

btn4.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn5 = document.getElementById("buttonCarrito5");

btn5.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn6 = document.getElementById("buttonCarrito6");

btn6.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn7 = document.getElementById("buttonCarrito7");

btn7.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})

const btn8 = document.getElementById("buttonCarrito8");

btn8.addEventListener("click", () => {
    Toastify({
        text: "Has añadido el producto al carrito",
        duration: 2000
    }).showToast();
})