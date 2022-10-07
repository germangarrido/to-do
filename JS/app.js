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
    const $form = document.getElementById("frmTarea")
    const $divElements = document.getElementById("list1")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            ${data}
            <button class="delete" onclick="removeElement(event, ${position})">X</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.formUsuario.value != "" && $form.formDescripcion.value != ""){ //$form.formVencimiento.value != "" && 
            let index = addJsonElement({
                formUsuario: $form.formUsuario.value,
                // formVencimiento: $form.formVencimiento.value,
                formDescripcion: $form.formDescripcion.value
            })
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.innerHTML = templateElement(` <strong>${$form.formUsuario.value}</strong>, ${$form.formDescripcion.value}`, index) //${$form.formVencimiento.value}, 
            $div.id = 'card'
            $div.draggable = true
            $divElements.appendChild($div, $divElements.firstChild)

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

//Para trabajar con el localstorage. esto deberia cargar lo que se guardó en el localStorage. no funciona hay que seguir intentando.
// const sesion =  document.getElementById('boardlists').innerHTML = JSON.parse(localStorage.getItem("list2"))
 

// esto me sirve para mover las tarjetas entre las columnas
/* Events fired on the drag target */
document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
};
  
document.ondragend = function(event) {
};
  
/* Events fired on the drop target */
document.ondragover = function(event) {
    event.preventDefault();
};
  
document.ondrop = function(event) {

//para trabajar con el localstorage
// const list2 = document.getElementsByClassName('board-list')
// const list2 = document.querySelector('.card')

    event.preventDefault();
    if ( event.target.className == "board-list" ) {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
      console.log(list2)
      localStorage.setItem("lista2", JSON.stringify(list2) ) // para guardar en el localstorage lo que el usuario está trabajando.
    }
}



let parametersUser = []
function removeUser(event, position) {
    event.target.parentElement.remove()
    delete parametersUser[position]
}

const addJsonUser = json => {
    parametersUser.push(json)
    return parametersUser.length - 1
}

(function loadUser(){
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("listaUser")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAddUser")

    const templateUser = (data, position) => {
        return (`
            ${data}
            <button class="delete" onclick="removeUser(event, ${position})">X</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.formUserNew.value != "" && $form.formEmail.value != ""){  
            let index = addJsonUser({
                formUserNew: $form.formUserNew.value,
                formEmail: $form.formEmail.value
            })
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.innerHTML = templateUser(`<strong>${$form.formUserNew.value}</strong>, ${$form.formEmail.value}`, index)  
            $div.id = 'user'
            $div.draggable = true
            $divElements.appendChild($div, $divElements.firstChild)

            var option = document.createElement("option")
            option.value = $form.formUserNew.value
            option.innerHTML = `${$form.formUserNew.value}` 
            console.log(option)

            document.getElementById("formUsuario").appendChild(option)
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

         
// este codigo esta bueno pero no me funcióno.         
// const newLocal = 'tareaNueva';
// // drag and drop tareas entre columnas

// const tarea = document.getElementById(newLocal);

// const columnaHaciendo = document.getElementById('haciendoColumna');

// columnaHaciendo.addEventListener('drageneter', e => {
//     console.log('drga enter');
// });
// columnaHaciendo.addEventListener('dragleave', e => {
//     console.log('drag leave');
// });

// columnaHaciendo.addEventListener('dragover', e => {
//     e.preventDefault();
//     console.log('drag over');
// });

// columnaHaciendo.addEventListener('drop', e => {
    
//     columnaHaciendo.parentNode.appendChild(tarea);
//     console.log('drop');
// });
 

