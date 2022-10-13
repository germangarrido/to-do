// LocalStorage
// Las propiedades localStorage y sessionStorage permiten guardar pares clave / valor en un navegador web. Los datos guardados son siempre formato texto.
// El objeto localStorage almacena datos sin fecha de vencimiento. Los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación (cuando se cierra la página).

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("apellido", "Perez") // No existe, lo agrega. 
    localStorage.setItem("apellido", "Pérez") // Existe, lo reemplaza
    localStorage.setItem("nombre", "Juan")
    // Retrieve
    console.log("Datos guardados.")
    ape = localStorage.getItem("apellido")
    nom = localStorage.getItem("nombre")
    console.log(ape + ", " + nom)
} else {
    console.log("Web Storage no soportado.")
}