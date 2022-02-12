// VARIABLES GLOBALES

let carritoDeCompras = []

const contenedorProductos = document.getElementById('container-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


// FUNCION MOSTRAR PRODUCTOS

mostrarProductos(stockProductos)

function mostrarProductos(array)  {

    contenedorProductos.innerHTML = "";

    array.forEach(producto => {
        let div = document.createElement('div')
        div.className = 'producto card col-md-3'
        div.innerHTML = `
        <p class="text-center align-items-center lead pb-2 pt-3 titulo-prod">
            ${producto.nombre}
        </p>
        <img src="${producto.img}" alt="" class="img-fluid">
        <p class="lead pt-2 text-center align-items-center precio">ARS ${producto.precio}</p>
        <p class="pt-2 text-center align-items-center"${producto.cantidad}</p>
        <p class="pt-2 text-center align-items-center">Código ref: ${producto.id}</p>
        <div class=" text-center align-items-center pb-3">
            <button type="button" class="btn btn-primary agregarAlCarrito">Agregar al carrito</button>
        </div>
        </div>
        `
    contenedorProductos.appendChild(div)
    });
}


// FUNCION AGREGAR AL CARRITO





// FUNCION ACTUALIZAR CARRITO