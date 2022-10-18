// funcion para actualizar la web tomando datos de localstorage
function actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage){
    localStorage.setItem(nombreVarLocalStorage, obtParaLocalStorage)
}


try{
    //accion encomendada al icono menu que solo se ve en viewport chicos. 
document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
}catch (error){
    console.log('No se cargó el menu de navegacion para pantallas pequeñas')
}


//////////// LOGIN ///////////////////////
const formLogin = document.getElementById("login")
const username = document.getElementById("username")
const password = document.getElementById("password")
const button = document.getElementById("entrar")

try{ 
    //obtengo datos de LocalStorage para el login 
    var datossesion = JSON.parse(localStorage.getItem('login'))
    if(datossesion != null){
        username.value = datossesion.username
        password.value = datossesion.password
    }else{
        username.value = ""
        password.value = ""
    }
    
}catch (error){
        console.log ("no se Obtubieron datos de usuario del localStorage")
}

try{
    //boton para cerrar el modal
    const btnCerrarModalGenerico = document.querySelector(".cerrar-modal-generico")
    btnCerrarModalGenerico.addEventListener("click",()=>{
        modalGenerico.close()
    })
} catch (error){
    console.log("no se escucha el modal")
}

////////// FIN LOGIN ////////////

/////////// TABLEROS ////////////

function actualizarTableros(){   

    //esto es para elegir el tableros haciendo click
let tabs = document.querySelectorAll('.tabs_toggle'),
contents = document.querySelectorAll('.tabs_content');
tabs.forEach((tab, index) => { 
tab.addEventListener('click',  () => { 
    contents.forEach( (content) => {
        content.classList.remove( 'is-active'); 
    }); 
    tabs.forEach((tab) => {
        tab.classList.remove('is-active');
    });
    contents [index].classList.add('is-active'); 
    tabs[index].classList.add('is-active');
});
});
}



var tableroVacio = `<div id='boardlists' class="tabs_content">
<div  class="board-list" > 
    <div class="list-title">
        QUE HACER
    </div>
    <div id='list1'> <!--en este div se cargan las tareas nuevas -->
    </div>
</div>
<div id='list2' class="board-list">  
    <div class="list-title">
        HACIENDO
    </div> 
</div>
<div id='list3' class="board-list"> 
    <div class="list-title">
        HECHO
    </div>
    <div  id='card2' class="card" draggable="true">
        tarea TABLERO AGREGADO DINAMICAMENTE
    </div> 
</div>
</div>`
var formAgregarTablero = document.querySelector('#formAgregarTablero')

var elementoTabsBody = document.querySelector('#tabs_body_id') 
var elemetoTabsHead = document.querySelector('#tabs_head_id')
var btnFormAgregarTablero = document.querySelector('#btnAddTablero')

    btnFormAgregarTablero.addEventListener('click', ()=>{
        if(formAgregarTablero.formTableroNombre.value === ''){
            alert('Tienes que ponerle un nombre al Tablero Nuevo')
        }else{
            var elementoNewTabsHead = document.createElement("li")
            elementoNewTabsHead.classList.add('tabs_toggle')
            elementoNewTabsHead.innerHTML = `${formAgregarTablero.formTableroNombre.value} 
            <button class="delete" onclick="removeTablero(event)">X</button>`
            console.log(elementoNewTabsHead)
            elemetoTabsHead.appendChild(elementoNewTabsHead)

            var elementNewTabsBody = document.createElement("div")
            elementNewTabsBody.innerHTML = tableroVacio
            elementoTabsBody.appendChild(elementNewTabsBody)
            formAgregarTablero.reset()
            actualizarTableros()

        }
    })


    function removeTablero(event) {
   
        document.querySelector("#modal-generico").innerHTML = 
        `<div>
        <p>¿Estás seguro que querés eliminar el tablero?</p>
        <button type="button" id="siEliminarTablero">Eliminar</button>
        <button type="button" id="noEliminaTablero">NO</button>
        </div>`
        document.querySelector("#modal-generico").showModal()
        document.querySelector("#siEliminarTablero").addEventListener('click',()=>{
            event.target.parentElement.remove()
            modalGenerico.close()
            //actualiza el objeto tableros que está en el localstorage
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tableros' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            actualizarTableros()
        })
        document.querySelector("#noEliminaTablero").addEventListener('click',()=>{
            modalGenerico.close()
        })
    }



//obtiene las tareas y los tableros guardados
var tableroStorage = localStorage.getItem('tableros')

try{ 
    //cheque si hay tableroStorage guardados en el localstorage
    if(tableroStorage === null){
        console.log("no hay tableros guardados")
    }else{
        document.getElementById('tableros').innerHTML = tableroStorage
        actualizarTableros()

    }
}catch(error){
    console.log('En esta página no se cargan los tableros')
}



/////////// FIN TABLEROS //////////////



//////////// TAREAS /////////////


// let listaTareas = [];
// const objTarea = {
//     id: '', 
//     prioridad: '',
//     usuario: '',
//     descripcionTarea: '' 
// } no se si voy a llegar a utiliar esto.



// PARA AGREGAR TAREAS NUEVAS
try{
    const $form = document.getElementById("formAgregarTarea")
    const $divElements = document.getElementById("list1")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAddTarea")
    
    $btnAdd.addEventListener("click", (event) => {

        if($form.formAgregarTareaUsuario.value === '' && $form.formAgregarTareaDescripcion.value.trim() === ''){ 
            alert("Para agregar una Tarea tenés que completar todos los campos")
        }else{
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.id = "c"+Date.now()
            $div.draggable = true
            $div.innerHTML =
                `<div id="priodidad"><strong>${$form.formAgregarTareaTipoPrioridad.value}</strong></div> 
                <div id="user">${$form.formAgregarTareaUsuario.value}</div>
                <div id="tarea">${$form.formAgregarTareaDescripcion.value.trim()}</div>
                <button type="button" class="delete" onclick= "editarTarea(event)">Editar</button>
            <button class="delete" onclick="removeElement(event)">X</button>`    
            $divElements.appendChild($div, $divElements.firstChild)

            $form.reset()

            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tableros' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            console.log('guardado tableros en localStorage')
        }
       
})

}catch (error){
   console.log('no se cargaron eventos del formulario de tareas nuevas')
}


//FUNCION PARA AVISAR QUE SE ESTá POR ELMINAR TAREAS Y FUNCION PARA ELIMINAR TAREAS

function removeElement(event) {
   
    document.querySelector("#modal-generico").innerHTML = 
    `<div>
    <p>¿Estás seguro que querés eliminar la tarea?</p>
    <button type="button" id="siEliminar">Eliminar</button>
    <button type="button" id="noEliminar">NO</button>
    </div>`
    document.querySelector("#modal-generico").showModal()
    document.querySelector("#siEliminar").addEventListener('click',()=>{
        event.target.parentElement.remove()
        modalGenerico.close()
        //actualiza el objeto tableros que está en el localstorage
        var obtParaLocalStorage = document.getElementById("tableros").innerHTML
        var nombreVarLocalStorage = 'tableros' 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
    })
    document.querySelector("#noEliminar").addEventListener('click',()=>{
        modalGenerico.close()
    })
}

try {
    // Función para editar tareas cargadas en los tableros.
    function editarTarea(event){
    // const editarTarea = document.querySelector('#editarTarea').addEventListener("click", (event) =>{
        // console.log(event.target.parentElement.querySelector("#tarea").textContent)
        var datoPrioridad = event.target.parentElement.querySelector("#priodidad").textContent
        var datoUsuario = event.target.parentElement.querySelector("#user").textContent
        var datoTarea = event.target.parentElement.querySelector("#tarea").textContent.trim()
        //No se porque el valor viene con lo que parece el placeholder. averiguar por qué
        
        // const datosTarea = event.target.parentElement.querySelectorAll("div")
        document.getElementById("formEditarTipoPrioridad").value = datoPrioridad
        document.getElementById("formEditarUsuario").value = datoUsuario
        document.getElementById("descripcionEditar").value = datoTarea
        document.querySelector("#modal-formEditarTarea").showModal()

        document.querySelector("#btnEdit").addEventListener('click',()=>{

        datoPrioridad = document.getElementById("formEditarTipoPrioridad").value 
        datoUsuario = document.getElementById("formEditarUsuario").value
        datoTarea = document.getElementById("descripcionEditar").value 
        
        document.querySelector("#modal-formEditarTarea").close()

        })



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




//Para trabajar con el localstorage. esto deberia cargar lo que se guardó en el localStorage. no funciona hay que seguir intentando.
// const sesion =  document.getElementById('boardlists').innerHTML = JSON.parse(localStorage.getItem("list2"))
 
/////// PARA MOVER LAS TAREAS DENTRO DE LAS COLUMNAS //////////

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
      var tableros = document.getElementById("tableros").innerHTML
            localStorage.setItem('tableros', tableros)
            // console.log(tableros)
       // para guardar en el localstorage lo que el usuario está trabajando.
    }
}

////////////  FIN TAREAS /////////////



/////// USUARIOS ///////////

//chequea si hay usuarios Registrados guardados en el localstorage 
var users = JSON.parse(localStorage.getItem("users"))
if(users === null){
    users = []
    console.log("NO hay Usuarios Registrados guardados en el LocalStorage")
}else{
    console.log("HAY Usuarios Registrados guardados en el LocalStorage")
}

var formCrearUser = document.getElementsByName("formCrearUser")[0]
var buttonCrearUser = document.getElementById("crear")
  

//formulario para que el usuario ingrese datos y generar un Usuario Registrado
try{  
    buttonCrearUser.addEventListener('click', (e) => {
        //validaciones de campos del form registro de usuarios.
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

        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        const datalogin = {
            username: dataUserNuevo.username,
            password: dataUserNuevo.password
        }
        var obtParaLocalStorage = JSON.stringify(datalogin)
        var nombreVarLocalStorage = "login" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        
        alert("Los datos fueron guardados con éxito, ya puedés ingresar a Lilo, bienvenido!!"+
        "\nGuardá tus tus datos de ingreso:\nUsuario: "+
        formCrearUser.userEmail.value+",\nPassword:"+formCrearUser.userClave.value)

        formCrearUser.reset() // limpia el form
        window.location = "index-tableros.html";
        
        // console.log(users)
        }
    })
    }catch (error){
        console.log ("este evento es de la pagina de bienvenida")
}

try{ 
    //Para guardar los datos del usuario en el locastorage
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const datalogin = {
            username: username.value,
            password: password.value
        }
        // esto es una comparación entre lo guardado y el formulario.
        if(username.value == datossesion.username & password.value == datossesion.password){
            // var obtParaLocalStorage = JSON.stringify(datalogin)
            // var nombreVarLocalStorage = "login" 
            // actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            window.location = "index-tableros.html";
        } else {
            alert("Los datos sin incorrectos")
    
            formLogin.reset() //limpia el form login
        }
    
        // console.log(datalogin)
    })
}catch (error){
        console.log ("no se cargó el Logín")
}

// Agregar quitar modificar usuarios.

let parametersUser = []
function removeUser(event, position) {

    document.querySelector("#modal-generico").innerHTML = 
    `<div>
    <p>¿Estás seguro que querés eliminar este Usuario?</p>
    <button type="button" id="siEliminar">Eliminar</button>
    <button type="button" id="noEliminar">NO</button>
    </div>`
    document.querySelector("#modal-generico").showModal()
    document.querySelector("#siEliminar").addEventListener('click',()=>{
        event.target.parentElement.remove()
        modalGenerico.close()
        //actualiza el objeto tableros que está en el localstorage
        var obtParaLocalStorage = document.getElementById("boardlists").innerHTML
        var nombreVarLocalStorage = 'tableros' 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        delete parametersUser[position] // esto elimina un objeto dentro de otro objeto
    })
    document.querySelector("#noEliminar").addEventListener('click',()=>{
        modalGenerico.close()
    })
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

        var templateElementUsers = (data, position) => {
            return (`
                ${data}
                <button type="button" class="" onclick="editarUser(event)">Editar</button>
                <button class="delete" onclick="removeUser(event, ${position})">X</button>
            `)
            }

    // carga los usuarios registrados guardados en el local storage en el form de AGREGAR tareas
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formAgregarTareaUsuario").appendChild(option)
        }
    // carga los usuarios registrados guardados en el local storage en el form de EDITAR tareas
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formEditarUsuario").appendChild(option)
        }
    } catch(error){
        console.log('en html usuarios no se carga')
    }
    try{
    for (let usuarioGuardado of usuariosGuardados){
        // console.log(usuarioGuardado)
        let index = addJsonElement({
            formUsuario: '',
            formPrioridad: '',
            formDescripcion: ''
        })
        const $divUser = document.createElement("div")
        $divUser.classList.add("card")
        $divUser.innerHTML = templateElementUsers(`${usuarioGuardado.apellido}-${usuarioGuardado.nombre}-
        ${usuarioGuardado.mail}-${usuarioGuardado.telefono}-
        ${usuarioGuardado.username}`,index)
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
        if(
            $form.formUserNew.value != "" && 
            $form.formEmail.value != "" && 
            $form.formUserColor.value != "" &&
            $form.formTipoUsuario.value != ""

        ){  
            let index = addJsonUser({
                formUserNew: $form.formUserNew.value.trim(),
                formEmail: $form.formEmail.value.trim(),
                // formColor: $form.$form.formUserColor.value,
                formTipoUser: $form.formTipoUsuario.value
            })
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.innerHTML = templateUser(
                `<div style="background:${$form.formUserColor.value};">${$form.formUserNew.value.trim()}</strong>, 
                ${$form.formEmail.value.trim()}
                ${$form.formTipoUsuario.value}`
                
                , index)  
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



/////////// FIN USUARIOS ///////////


// el modal
const modalGenerico = document.querySelector("#modal-generico")
const modalGenericoContenido = document.querySelector("#modal-generico-contenido")


////////////////// AGRADECIMIENTOS ////////////////

    const ventanaGracias = ` <h2>AGRADECIMIENTOS</h2>
    <p>
    Este site fue contruido gracias al aporte de los siguientes canales y personas que comparten su conocimiento 
    </p>
    <a href="https://www.youtube.com" target="_blank" >Canal de youtube</a>
    <a ref=# >Canal de youtube</a>
    <a ref=# >Canal de youtube</a>
    <a ref=# >Canal de youtube</a>
    <div>

    </div>
    `

    try{

        btnAbrirModal = document.querySelector("#btn-abrir-modal-gracias")
        btnAbrirModal.addEventListener("click",()=>{
            modalGenericoContenido.innerHTML = ventanaGracias
            modalGenerico.showModal()
        })

    }catch(error){
        console.log('no se escucha el modal gracias')
    }

////////////////// FIN  AGRADECIMIENTOS ////////////////

var modalCalendar = document.querySelector("#modal-calendar")
try{
    var btnAbrirModal = document.querySelector("#btn-abrir-modal-calendario")
    btnAbrirModal.addEventListener("click",()=>{
        // modalGenericoContenido.innerHTML = ventanaCalendario
        modalCalendar.showModal()
    })

   

// Ejemplo
// const btnAbrirModalAyuda = document.querySelector("#btn-abrir-modal-ayuda")
// btnAbrirModalAyuda.addEventListener("click",()=>{
//     modalGenericoContenido.innerHTML = ventanaAyuda
//     modalGenerico.showModal()
// })
} catch (error){
    console.log("esto se deberia cargr en html tablero / usuarios / configuracion / ayuda")
}

//////////////// CALENDARIO///////////////////

    try{
        const date = new Date();

        const renderCalendar = () => {
        date.setDate(1);
        
        const monthDays = document.querySelector(".days");
        
        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        
        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        
        const firstDayIndex = date.getDay();
        
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        
        const nextDays = 7 - lastDayIndex - 1;
        
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        
        document.querySelector(".date h1").innerHTML = months[date.getMonth()];
        
        document.querySelector(".date p").innerHTML = new Date().toDateString();
        
        let days = "";
        
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }
        
        for (let i = 1; i <= lastDay; i++) {
            if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
            ) {
            days += `<div class="today">${i}</div>`;
            } else {
            days += `<div>${i}</div>`;
            }
        }
        
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
            monthDays.innerHTML = days;
        }
        };
        
        document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        });
        
        document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        });
        
        renderCalendar();

        } catch (error){
        console.log('No e cargó el calendario')
    }
/////////// FIN  CALENDARIO///////////////////

/////////////////////////RESTOS DE CODIGO QUE NO SE USA////////////////////////

// try{
// //boton para llamar al modal
// const btnAbrirModalGenerico = document.querySelector("#abrir-modal-generico")
// btnAbrirModalGenerico.addEventListener("click",()=>{
  
//     modalGenerico.showModal()
// })
// } catch (error){
//     console.log("este modal es de la pagina de bienvenida")
// }





         
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
 

