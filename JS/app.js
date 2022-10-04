document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})



let parameters = []
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load(){
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            <strong>Tarea</strong> ${data}
            <button class="delete" onclick="removeElement(event, ${position})">X</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.formUsuario.value != "" && $form.formVencimiento.value != "" && $form.formDescripcion.value != ""){
            let index = addJsonElement({
                formUsuario: $form.formUsuario.value,
                formVencimiento: $form.formVencimiento.value,
                formDescripcion: $form.formDescripcion.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification","nuevatarea-form" ,"is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.formUsuario.value} ${$form.formVencimiento.value}, ${$form.formDescripcion.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }else{
            alert("Complete los campos")
        }
    })

    $btnSave.addEventListener("click", (event) =>{
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $divElements.innerHTML = ""
        parameters = []
    })
})()


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

         
         
        

