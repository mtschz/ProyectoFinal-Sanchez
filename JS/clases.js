let categorias = []
// Dado que los datos en el JSON estan escritos en ingles pero la pagina esta en español, decidi hacer que las categorias sean objetos con un nombre en español y otro en ingles
class categoria{
    constructor(categoriaEsp, categoriaEng){
       this.categoriaEsp = categoriaEsp
       this.categoriaEng = categoriaEng
    }
     // Hace un checkbox para cada categoria
  mostrarCategorias(){
        let nuevaCatergoriaLi = document.createElement("li")
        nuevaCatergoriaLi.innerHTML = 
        `<label>
          <input type="checkbox" name="material" value=${this.categoriaEng} id=${this.categoriaEsp}>
          ${this.categoriaEsp}
        </label>`
      listaCategorias.appendChild(nuevaCatergoriaLi)   
     }
  }
  
  const Joyas = new categoria("Joyas", "womens-jewellery")
  categorias.push(Joyas)
  const Fragancias = new categoria("Fragancias", "fragrances")
  categorias.push(Fragancias)
  const Skincare = new categoria("Skincare", "skincare")
  categorias.push(Skincare)