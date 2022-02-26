import mostrarProductos from "./components/products/mostrarProductos.js";
import { PRODUCTS } from "./data/products.js"

document.addEventListener("DOMContentLoaded", (e) => {
    mostrarProductos(PRODUCTS);
})