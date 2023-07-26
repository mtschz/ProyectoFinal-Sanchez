const productos = []
const productosSkincareURL = "https://dummyjson.com/products/category/skincare"
const productosJoyasURL = "https://dummyjson.com/products/category/womens-jewellery"
const productosFraganciasURL = "https://dummyjson.com/products/category/fragrances"
let btnsCarrito
// Esta funcion genera una card en el HTML para cada producto de un array
function mostrarCatalogo(array) {
  for (let producto of array) {
    productos.push(producto);
    let nuevoProductoDiv = document.createElement("div");
    nuevoProductoDiv.className = "col-lg-4 mb-2";
    nuevoProductoDiv.innerHTML = `
      <div class="card col-lg-12">
        <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
        <div class="card-body">
          <h4 class="card-title" id="card-title">${producto.title}</h4>
          <p class="precio">$${producto.price}</p>
          <button id=${producto.id} class="btn btn-primary btn-carrito">Agregar al carrito</button>
        </div>
      </div>
    `;
    catalogo.appendChild(nuevoProductoDiv);
  }
  btnsCarrito = Array.from(document.getElementsByClassName("btn-carrito"))
  agregarEventListenerABtnCarrito()
}
// Toma el url del API como parametro, pushea los datos obtenidos al array productos y los muestra en el catalogo
const agregarProductos = (url) => {
  spinnerCatalogo.classList.toggle("d-none")
  fetch(url)
  .then(response => response.json())
  .then(response => {
    for(let producto of response.products) {
      productos.push(producto)
    }
      mostrarCatalogo(response.products)
      spinnerCatalogo.classList.toggle("d-none")
  })
  .catch(error => console.error(error));
}
agregarProductos(productosSkincareURL)
agregarProductos(productosJoyasURL)
agregarProductos(productosFraganciasURL)