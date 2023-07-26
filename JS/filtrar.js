let categoriasSeleccionadas = []
let precioMax
let precioMin
let busqueda
//Obtiene del API los productos de la categoria que ingreso el usuario
function filtrarPorCategoria(categoria) {
   fetch(`https://dummyjson.com/products/category/${categoria}`)
   .then(response => response.json())
   .then(response => {
       mostrarCatalogo(response.products)
   })
   .catch(error => console.error(error));
}
//Obtiene del API los productos que contengan la palabra que ingreso el usuario
const buscarProducto  = (producto) => {
   fetch(`https://dummyjson.com/products/search?q=${producto}`)
   .then(response => response.json())
   .then(response => {
      catalogo.innerHTML=""
      if(response.products.length == 0) {
         catalogo.innerHTML = ""
         let noResultados = document.createElement("p")
         noResultados.innerHTML = `<p>Lamentablemente ningun producto coincide con su busqueda</p>`
         catalogo.appendChild(noResultados)
      }
      else {
         mostrarCatalogo(response.products)
      }
   })
   .catch(error => console.error(error));
}
//Obtiene el valor del input para la busqueda
buscarInput.addEventListener("input", function () {
   busqueda = buscarInput.value
}
)
buscarBtn.addEventListener("click", function () {
     buscarProducto(busqueda);
 });
// Esta funcion detecta cambios en los checkbox de listaCategorias y si alguno de ellos esta checkedo se muestran los productos de esa categoria
listaCategorias.addEventListener("change", function(e) {
   const target = e.target
  if (target.nodeName === "INPUT" && target.type === "checkbox") {
      const checked = target.checked
      const value = target.value
      if (checked == true) {
         categoriasSeleccionadas.push(value)
         catalogo.innerHTML = ""
      for (let categoria of categoriasSeleccionadas) {
         filtrarPorCategoria(categoria)
      }
      } 
      else if (checked == false) {
         let i = categoriasSeleccionadas.indexOf(value);
         categoriasSeleccionadas.splice(i, 1);
         if (categoriasSeleccionadas.length == 0) {
            catalogo.innerHTML = ""
            agregarProductos(productosSkincareURL)
            agregarProductos(productosJoyasURL)
            agregarProductos(productosFraganciasURL)
         }
         else {
            catalogo.innerHTML = ""
            for (let categoria of categoriasSeleccionadas) {
               filtrarPorCategoria(categoria)
            }
         }
      }
   }
})
//Obtiene el valor del input
precioMinInput.addEventListener("input", function () {
   precioMin = parseInt(precioMinInput.value)
}
)
precioMaxInput.addEventListener("input", function () {
   precioMax = parseInt(precioMaxInput.value)
})
// Esta funcion busca los productos cuyos precios se encuentren en el rango ingresado por el usuario.
function filtrarPorPrecio(){
   filtrado = productos.filter((producto) => {
      return producto.price >= precioMin && producto.price <= precioMax
    })
    if(filtrado.length == 0) {
      catalogo.innerHTML = ""
      let noResultados = document.createElement("p")
      noResultados.innerHTML = `<p>Lamentablemente ningun producto coincide con su busqueda</p>`
      catalogo.appendChild(noResultados)
    }
    else {
      catalogo.innerHTML = ""
      mostrarCatalogo(filtrado)
    }
}
filtrarPrecioBtn.addEventListener("click", function() {
   filtrarPorPrecio()
})