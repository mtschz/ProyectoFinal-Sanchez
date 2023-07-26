let themeToggleBtn = document.getElementById("theme-toggle")
let modoOscuro = localStorage.getItem("modoOscuro")
// Añade la clase dark-theme a los elementos del html y modifica el valor de modoOscuro en el storage
function setDarkTheme () {
    document.body.classList.add("dark-theme")
    localStorage.setItem("modoOscuro", true)
}
// Remueve la clase dark-theme y modifica el valor de modoOscuro en el storage
function disableDarkTheme () {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("modoOscuro", false)
}
// Segun el valor de modoOscuro en el storage, corre la funcion setDarkTheme o disableDarkTheme
if (modoOscuro === "true") {
    setDarkTheme()
    themeToggleBtn.checked = true
}
else {
    disableDarkTheme()
}
themeToggleBtn.addEventListener("change", () => {
    if (themeToggleBtn.checked) {
        setDarkTheme()
    }
    else {
        disableDarkTheme()
    }
})
