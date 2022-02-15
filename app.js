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
            <button id="agregarAlCarrito${producto.id}" type="button" class="btn btn-primary">Agregar al carrito</button>
        </div>
        </div>
        `
    contenedorProductos.appendChild(div)

    let btnAgregar = document.getElementById(`agregarAlCarrito${producto.id}`);
    // console.log(btnAgregar)

    btnAgregar.addEventListener('click', ()=> {
        agregarAlCarrito(producto.id)
    })
    });
}


// FUNCION AGREGAR AL CARRITO
function agregarAlCarrito(id){
    let agregarProducto = stockProductos.find(item => item.id == id);
    console.log(agregarProducto)

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${agregarProducto.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${agregarProducto.nombre}</h5>
          <p class="card-text">ARS ${agregarProducto.precio}</p>
          <p class="card-text"><small class="text-muted">${agregarProducto.cantidad}</small></p>
          <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
        </div>
      </div>
    </div>
  </div>`

    contenedorCarrito.appendChild(div)
}




// FUNCION ACTUALIZAR CARRITO