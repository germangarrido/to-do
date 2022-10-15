//login
    const formLogin = document.getElementById("login")
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const button = document.getElementById("entrar")

try{

    const datossesion = JSON.parse(localStorage.getItem('login'))
    username.value = datossesion.username
    password.value = datossesion.password
}catch (error){
        console.log ("no se cargó el usuario y el password")
}

try{ //para cargar los datos del usuario guardado en el locastorage
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const datalogin = {
            username: username.value,
            password: password.value
        }
    
        localStorage.setItem("login", JSON.stringify(datalogin))
    
        if(datalogin.username == "germna" & datalogin.password == "4321"){
            window.location = "index-tableros.html";
        } else {
            alert("Los datos sin incorrectos")
    
            formLogin.reset()
        }
    
        // console.log(datalogin)
    })
}catch (error){
        console.log ("no se cargó el Logín")
}
//crear usuario 

        var formCrearUser = document.getElementsByName("formCrearUser")[0]
        const users = JSON.parse(localStorage.getItem("users"))
try{
    const buttonCrearUser = document.getElementById("crear")
    
    buttonCrearUser.addEventListener('click', (e) => {

        if(formCrearUser.userApellido.value == 0 ){
            alert("El campo Apellido es obligatorio")
        }else if (formCrearUser.userNombre.value == 0){
            alert("El campo Nombre es obligatorio")
        }else if (formCrearUser.userEmail.value == 0){
            alert("El campo Email es obligatorio")
        }else if (formCrearUser.userTelefono.value == 0){
            alert("El campo Teléfono es obligatorio")
        }else if(formCrearUser.userClave.value == 0){
            alert("El campo Clave es obligatorio")
        }else if (formCrearUser.userClave.value != formCrearUser.userRClave.value ){
            alert("las claves deben coincidir")
        }else{

        e.preventDefault()
        const dataUserNuevo = {
            apellido: formCrearUser.userApellido.value,
            nombre: formCrearUser.userNombre.value,
            mail: formCrearUser.userEmail.value,
            telefono: formCrearUser.userTelefono.value,
            username: formCrearUser.userEmail.value,
            password: formCrearUser.userClave.value
        }

        users.push(dataUserNuevo)
    
        localStorage.setItem("users", JSON.stringify(users))
    
            alert("Los datos fueron guardados")

            formCrearUser.reset()
        console.log(users)
        }
    })
    }catch (error){
        console.log ("este evento es de la pagina de bienvenida")
}



//guarda las tareas y los tableros que se estuvieron creando moviendo y eliminando
var tableroStorage = localStorage.getItem('tableros')

try{
    if(tableroStorage == null){
        console.log("no hay tablero todavia")
    }else{
    document.getElementById("boardlists").innerHTML = tableroStorage
    }
}catch(error){
    console.log('no se cargó el tablero')
}

try{
document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
}catch (error){
    console.log('no se cargó el menu de navegacion')
}

let parameters = []
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

try {
 function editarTarea(event){
    // const editarTarea = document.querySelector('#editarTarea').addEventListener("click", (event) =>{
        console.log(event.target.parentElement.querySelector("#priodidad").textContent)
        const datoPrioridad = event.target.parentElement.querySelector("#priodidad").textContent
        const datoUsuario = event.target.parentElement.querySelector("#user").textContent
        const datoTarea = event.target.parentElement.querySelector("#tarea").textContent
        
        const datosTarea = event.target.parentElement.querySelectorAll("div")
        document.getElementById("formEditarTipoPrioridad").value = datoPrioridad
        document.getElementById("formEditarUsuario").value = datoUsuario
        document.getElementById("descripcionEditar").value = datoTarea

        // const divEditar = document.createElement("div")
        // divEditar.innerHTML = `${event.target.parentElement.innerHTML}`
        // document.querySelector("#modal-formEditarTarea").appendChild(divEditar)
        document.querySelector("#modal-formEditarTarea").showModal()
 }
}catch(error){
console.log('no se escucha editar tarea')
}
    // const btnCerrarModalGenerico = document.querySelector(".cerrar-modal-generico")
    // btnCerrarModalGenerico.addEventListener("click",()=>{
    //     modalGenerico.close()
    // })
    // console.log(event)
// }


// es para cargar tareas nuevas 
try{
    const $form = document.getElementById("frmTarea")
    const $divElements = document.getElementById("list1")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            ${data}
            <button type="button" class="delete" onclick= "editarTarea(event)">Editar</button>
            <button class="delete" onclick="removeElement(event, ${position})">X</button>
        `)
        }
        $btnAdd.addEventListener("click", (event) => {
        if($form.formUsuario.value.trim() != "" && $form.formDescripcion.value.trim() != ""){ //$form.formVencimiento.value != "" && 
            let index = addJsonElement({
                formUsuario: $form.formUsuario.value.trim(),
                formPrioridad: $form.formTipoPrioridad.value.trim(),
                formDescripcion: $form.formDescripcion.value.trim()
            })
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.innerHTML = templateElement(
                `<div id= "priodidad"> <strong>${$form.formTipoPrioridad.value.trim()}</strong></div> 
                <div id= "user">${$form.formUsuario.value.trim()}</div><div id="tarea">
                ${$form.formDescripcion.value.trim()}</div>`, 
                index)
            $div.id = "c"+Date.now()
            $div.draggable = true
            $divElements.appendChild($div, $divElements.firstChild)

            $form.reset()

            var tableros = document.getElementById("boardlists").innerHTML
            localStorage.setItem('tableros', tableros)
            // console.log(tableros)

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

}catch (error){
   console.log('no se cargaron eventos del formulario de tareas nuevas')
}

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

    event.preventDefault();
    if ( event.target.className == "board-list" ) {
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
      var tableros = document.getElementById("boardlists").innerHTML
            localStorage.setItem('tableros', tableros)
            // console.log(tableros)
       // para guardar en el localstorage lo que el usuario está trabajando.
    }
}



// Agregar quitar modificar usuarios.

let parametersUser = []
function removeUser(event, position) {
    event.target.parentElement.remove()
    delete parametersUser[position]
}

const addJsonUser = json => {
    parametersUser.push(json)
    return parametersUser.length - 1
}


    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("listaUser")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAddUser")

    const $users = document.getElementById('menuUsers')


    const usuariosGuardados = JSON.parse(localStorage.getItem('users'))
    try{
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formUsuario").appendChild(option)
        }
    } catch(error){
        console.log('en html usuarios no se carga')
    }
    try{
    for (let usuarioGuardado of usuariosGuardados){
        // console.log(usuarioGuardado)
        const $divUser = document.createElement("div")
        $divUser.classList.add("card")
        $divUser.innerHTML = 
        `${usuarioGuardado.apellido}-${usuarioGuardado.nombre}-
        ${usuarioGuardado.mail}-${usuarioGuardado.telefono}-
        ${usuarioGuardado.username}`
        $divElements.appendChild($divUser,$divElements.firstChild)
    }
} catch (error){
    console.log('en html tablero no se carga')
}
    


try{
// es para cargar usuarios nuevos

    const templateUser = (data, position) => {
        return (`
            ${data}
            <button class="delete" onclick="removeUser(event, ${position})">X</button>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.formUserNew.value != "" && $form.formEmail.value != ""){  
            let index = addJsonUser({
                formUserNew: $form.formUserNew.value.trim(),
                formEmail: $form.formEmail.value.trim()
            })
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.innerHTML = templateUser(`<strong>${$form.formUserNew.value.trim()}</strong>, ${$form.formEmail.value.trim()}`, index)  
            $div.id = 'user'+Date.now()
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
}catch (error){
    console.log('no se cargaron eventos del formularios de usuario')
}





// function entrar(e){
//     e.preventDefault()
//     var enter = 
// }



// el modal
const modalGenerico = document.querySelector("#modal-generico")
const modalGenericoContenido = document.querySelector("#modal-generico-contenido")

// const ventanaConfiguracion = ``

// const ventanaUsuarios = ` `

const ventanaCalendario = ` <h2>CALENDARIO</h2>
<div>
acá va una vista de calendario con formato de mes. en futuro se puede pensar en un calendario de fechas configuradas por el usuario
 </div>
 `

const ventanaAyuda = ` `

  try{
// const btnAbrirModalUsuarios = document.querySelector("#btn-abrir-modal-usuarios")
// btnAbrirModalUsuarios.addEventListener("click",()=>{
//     modalGenericoContenido.innerHTML = ventanaUsuarios
//     modalGenerico.showModal()
// })

const btnAbrirModalCalendario = document.querySelector("#btn-abrir-modal-calendario")
btnAbrirModalCalendario.addEventListener("click",()=>{
    modalGenericoContenido.innerHTML = ventanaCalendario
    modalGenerico.showModal()
})

// const btnAbrirModalConfig = document.querySelector("#btn-abrir-modal-configuracion")
// btnAbrirModalConfig.addEventListener("click",()=>{
//     modalGenericoContenido.innerHTML = ventanaConfiguracion
//     modalGenerico.showModal()
// })

// const btnAbrirModalAyuda = document.querySelector("#btn-abrir-modal-ayuda")
// btnAbrirModalAyuda.addEventListener("click",()=>{
//     modalGenericoContenido.innerHTML = ventanaAyuda
//     modalGenerico.showModal()
// })

  } catch (error){
    console.log("esto se deberia cargr en html tablero / usuarios / configuracion / ayuda")
  }



// try{
// //boton para llamar al modal
// const btnAbrirModalGenerico = document.querySelector("#abrir-modal-generico")
// btnAbrirModalGenerico.addEventListener("click",()=>{
  
//     modalGenerico.showModal()
// })
// } catch (error){
//     console.log("este modal es de la pagina de bienvenida")
// }


try{
//boton para cerrar el modal
const btnCerrarModalGenerico = document.querySelector(".cerrar-modal-generico")
btnCerrarModalGenerico.addEventListener("click",()=>{
    modalGenerico.close()
})
} catch (error){
    console.log(error)
}




         
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
 

