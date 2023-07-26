let listaProductosEnCarrito = document.getElementById("productosEnCarrito")
let carritoHTML = document.getElementById("carrito")
let inputsCantidad
let productoAgregado
let productoAgregadoId
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let btnsBorrarCarrito
//Muestra los productos en el carrito, si se encuentra vacio añade un texto en su lugar
function mostrarCarrito() {
    if (carrito.length == 0) {
        listaProductosEnCarrito.innerHTML = `<p>Su carrito se encuentra vacio</p>`
    }
    else {
        listaProductosEnCarrito.innerHTML = ""
        for(producto of carrito){
            let nuevoTr = document.createElement("tr")
            nuevoTr.innerHTML = 
            `<td>${producto.title}</td>
            <td>$${producto.price}</td>
            <td class="td"><input type="number" name="cantidad" value="1" min="0" max=${producto.stock} id=${producto.id} class="inputCantidad form-control">        <button type="button" class="btn btn-secondary btnBorrarCarrito" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
            <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
          </svg></button></td>`
            listaProductosEnCarrito.appendChild(nuevoTr)   
            
         }
         inputsCantidad = Array.from(document.getElementsByClassName("inputCantidad"))
         btnsBorrarCarrito = Array.from(document.getElementsByClassName("btnBorrarCarrito"))
         agregarEventListenerABtnEliminarCarrito()
    }
}
// Checkea si el producto ya existe en el carrito. Si no existe, se agrega. Si existe se notifica al usurio mediante un alert
const agregarAlCarrito = (array) => {
    productoAgregado = carrito.find((elem)=>elem.id == productoAgregadoId) 
    console.log(productoAgregado)
    if (productoAgregado == undefined) {
        let productoAgregadoArray = array.filter((product) => {
            return product.id == productoAgregadoId
        })
        let productoAgregadoObj = productoAgregadoArray[0]
        carrito.push(productoAgregadoObj)
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito()
        Swal.fire({
            icon: 'success',
            title: 'Ha agregado un producto al carrito',
            text: `El producto ${productoAgregadoObj.title} ha sido agregdo`,
            confirmButtonColor: "green",
            confirmButtonText : "Aceptar",
          })
    }
    else {
        mostrarCarrito()
        Swal.fire({
            icon: 'error',
            title: 'El producto ya existe en el carrito',
            text: `El producto ${productoAgregado.title} ya se encuentra en el carrito`,
            confirmButtonColor: "green",
            confirmButtonText : "Aceptar",
          })
    }
}
// Elimina un producto del carrito
const eliminarProductoDelCarrito = () => {
  productoSeleccionado = carrito.find((elem)=>elem.id == productoSeleccionadoId)
  productoSeleccionadoIndex = carrito.indexOf(productoSeleccionado)
  console.log(carrito.indexOf(productoSeleccionado))
  carrito.splice(productoSeleccionadoIndex, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito()
}
mostrarCarrito()