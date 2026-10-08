import {products} from './products.js'

const template = document.getElementById("cardTemplate");
const container = document.getElementById("cards");

products.forEach((product) => {
    const clone = template.content.cloneNode(true);

    const link = clone.querySelector(".card_link");
    link.href = `/product.html?id=${product.id}`

    clone.querySelector(".card_img").src = product.img;
    clone.querySelector(".card_img").alt = product.title;
    clone.querySelector(".price").textContent = product.price;
    clone.querySelector(".title").textContent = product.title;

    container.appendChild(clone);
});