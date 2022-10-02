document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})


const tablaTitulos = document.getElementById("tareasIzq")
tablaTitulos.addEventListener("click", verificarClick)

function verificarClick(e){
    if(e.target.matches(".eliminarRow")){
        const tIndex = e.target.rowIndex
        tablaTitulos.deleteRow(tIndex) 
    }

}

function agregarRegistrocV(){
    const tableBody = document.getElementById("tareasIzq")
    const template = document.getElementById("tareaNueva")
    const templateRow = template.content

    const respuestaFormUsuario = document.getElementById('formUsuario').value
    const respuestaFormVencimiento = document.getElementById("formVencimiento").value
    const respuestaFormDescripcion = document.getElementById("formDescripcion").value

    let tr = templateRow.cloneNode(true)
    console.log(respuestaFormUsuario)
    let colUsuario = tr.querySelector(".usuario") // class en el template
    let colvencimiento = tr.querySelector(".vencimiento") // class en el template
    let colDescripcion = tr.querySelector(".descripcion") // class en el template

    colUsuario.textContent = respuestaFormUsuario
    colvencimiento.textContent = respuestaFormVencimiento
    colDescripcion.textContent = respuestaFormDescripcion
    tableBody.appendChild(tr)
}
const btnAbrirModalConfig = document.querySelector("#btn-abrir-modal-configuracion")
const btnAbrirModalAyuda = document.querySelector("#btn-abrir-modal-ayuda")
const btnAbrirModalCalendario = document.querySelector("#btn-abrir-modal-calendario")
const btnAbrirModalUsuarios = document.querySelector("#btn-abrir-modal-usuarios")

const btnCerrarModalConfig = document.querySelector("#btn-cerrar-modal-config")
const btnCerrarModalAyuda = document.querySelector("#btn-cerrar-modal-ayuda")
const btnCerrarModalCalendario = document.querySelector("#btn-cerrar-modal-calendario")
const btnCerrarModalUsuarios = document.querySelector("#btn-cerrar-modal-usuarios")

const modalConfig = document.querySelector("#modal-configuracion")
const modalAyuda = document.querySelector("#modal-ayuda")
const modalCalendario = document.querySelector("#modal-calendario")
const modalUsuarios = document.querySelector("#modal-usuarios")


btnAbrirModalConfig.addEventListener("click",()=>{
    modalConfig.showModal()
})
btnAbrirModalAyuda.addEventListener("click",()=>{
    modalAyuda.showModal()
})
btnAbrirModalCalendario.addEventListener("click",()=>{
    modalCalendario.showModal()
})
btnAbrirModalUsuarios.addEventListener("click",()=>{
    modalUsuarios.showModal()
})

btnCerrarModalConfig.addEventListener("click",()=>{
    modalConfig.close()
})
btnCerrarModalAyuda.addEventListener("click",()=>{
    modalAyuda.close()
})
btnCerrarModalCalendario.addEventListener("click",()=>{
    modalCalendario.close()
})
btnCerrarModalUsuarios.addEventListener("click",()=>{
    modalUsuarios.close()
})

         
         
        

