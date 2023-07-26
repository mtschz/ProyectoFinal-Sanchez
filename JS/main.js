let listaCategorias = document.getElementById("listaCategorias")
let catalogo = document.getElementById("catalogo")
let precioMinInput = document.getElementById("precioMin")
let precioMaxInput = document.getElementById("precioMax")
let filtrarPrecioBtn = document.getElementById("filtrarPrecioBtn")
let buscarBtn = document.getElementById("buscarBtn")
let buscarInput = document.getElementById("buscarInput")
let spinnerCatalogo = document.getElementById("spinnerCatalogo")
let btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
let preciosCadaProducto = []
let total = 0
for (let categoria of categorias) {
    categoria.mostrarCategorias()
 }
// Esta funcion agrega los event listeners a los botones para agregar un producto al carrito 
 const agregarEventListenerABtnCarrito = () => {
    btnsCarrito.forEach(btnCarrito => {
    btnCarrito.addEventListener("click", (e)=> {
        productoAgregadoId = btnCarrito.getAttribute("id")
        agregarAlCarrito(productos)
    })
});
}
// Hace lo mismo para los botones de eliminar un producto
const agregarEventListenerABtnEliminarCarrito = () => {
    btnsBorrarCarrito.forEach(btnBorrarCarrito => {
        btnBorrarCarrito.addEventListener("click", (e)=> {
            productoSeleccionadoId = btnBorrarCarrito.getAttribute("id")
            eliminarProductoDelCarrito()
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: `El producto ${productoSeleccionado.title} ha sido eliminado del carrito`,
                showConfirmButton: true
              })
        })
    })
}
// Agrega los event listeners a los inputs de cantidad en la table del carrito
const agregarEventListenerAInputCantidad = () => {
    inputsCantidad.forEach(inputCantidad => {
        cantidadIngresada = inputCantidad.value
        inputCantidad.addEventListener("input", function () {
            cantidadIngresada = parseInt(inputCantidad.value)
            calcularTotalPorProducto(inputCantidad)

         })
         calcularTotalPorProducto(inputCantidad)
    })
}
// Este boton finaliza la compra, calcula el total y muestra un alert con estos datos
btnFinalizarCompra.addEventListener("click", function() {
    total = 0
    preciosCadaProducto = []
    agregarEventListenerAInputCantidad()
    for (let precio of preciosCadaProducto) {
        total += precio
    }
    Swal.fire({
        icon: 'info',
        title: `El total de su compra es $${total}`,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Finalizar compra',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Gracias por su compra', '', 'success')
          carrito = []
          preciosCadaProducto = []
          total = 0
          localStorage.setItem("carrito", JSON.stringify(carrito))
          mostrarCarrito()
        }
      })
})
// Esta funcion multiplica la cantidad ingresada por el precio unitario y pushea el precio de cada producto a un array
const calcularTotalPorProducto = (input) => {
    let productoId = input.getAttribute("id")
    productoSeleccionado = carrito.find((elem)=>elem.id == productoId)
    let precioProducto = cantidadIngresada * productoSeleccionado.price
    preciosCadaProducto.push(precioProducto)
}