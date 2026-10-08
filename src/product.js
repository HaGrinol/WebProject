import {products} from './products.js';

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find((product) => product.id === productId);

if (!product) {
    document.body.innerHTML = "<h1>404</h1><h2>Товар не найден</h2>";
}   else{
    document.getElementById("productImg").src = product.img;
    document.getElementById("productImg").alt = product.title;
    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productDescription").textContent = product.description;
}