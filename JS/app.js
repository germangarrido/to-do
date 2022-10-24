// funcion para actualizar la web tomando datos de localstorage
function actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage){
    localStorage.setItem(nombreVarLocalStorage, obtParaLocalStorage)
}

// este modal se usa para todas las comunicaciones flotantes
const modalGenerico = document.querySelector("#modal-generico")
const modalGenericoContenido = document.querySelector("#modal-generico-contenido")

function noEliminar(){
    modalGenerico.close()
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

    //chequea si hay usuarios Registrados guardados en el localstorage 
    var users = JSON.parse(localStorage.getItem("users"))
    if(users === null){
        users = []
        console.log("NO hay Usuarios Registrados guardados en el LocalStorage")
    }else{
        // console.log(users)
        console.log("HAY Usuarios Registrados guardados en el LocalStorage")
    }

    //OBTENGO DATOS del login guardados en el  LocalStorage y los ubican en los input deo form login
    var datossesionGuardado = JSON.parse(localStorage.getItem('login'))

    
    if(datossesionGuardado === null){
        datossesionGuardado = []

        alert('Para ingresar tenés que inicar Sesión')
        window.location = "index.html"  

        var obtParaLocalStorage = JSON.stringify(datalogin)
        var nombreVarLocalStorage = "login" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
 
        datossesionGuardado.username = 'dos'
        console.log("NO hay datos de login guardados en el LocalStorage")
        
    }else{

        console.log("Si hay datos de login guardados en el LocalStorage")
      //  document.getElementById('userSesion').textContent = datossesionGuardado.username
    }

    try{

        username.value = datossesionGuardado.username
        password.value = datossesionGuardado.password

    }catch(error){

    }

    // entrarSesion()

    var usuarioSesion, passwordSesion , datalogin
    function entrarSesion(){
        users.map(usuario =>{
        if(usuario.username === username.value && usuario.password === password.value ){      
            usuarioSesion = usuario.username
            passwordSesion = usuario.password 
        }
        })

        if(username.value === usuarioSesion && password.value === passwordSesion){
            
            datalogin = {
                username: username.value,
                password: password.value
            }
            var obtParaLocalStorage = JSON.stringify(datalogin)
            var nombreVarLocalStorage = "login" 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
            window.location = "index-tableros.html";

        }else{

        alert("Los datos son incorrectos")
        username.value = ""
        password.value = ""
        }
    }
    try{
        document.getElementById('userSesion').textContent = datossesionGuardado.username
    }catch(error){
        console.log(error)
    }
    
    function cerrarSesion(){
   
        datalogin = {
        username: '',
        password: ''
        }
            var obtParaLocalStorage = JSON.stringify(datalogin)
            var nombreVarLocalStorage = "login" 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 

        window.location = "index.html";
    
    }

try{ 
    
    // if(datossesion != null){
    //     username.value = datossesion.username
    //     password.value = datossesion.password
    // }else{
    //     username.value = ""
    //     password.value = ""
    // }

    // //form para simular login y para guardar los datos del usuario en el locastorage
    // button.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     const datalogin = {
    //         username: username.value,
    //         password: password.value
    //     }
    //     // esto es una comparación entre lo guardado y el formulario.
    //     if(username.value === datossesion.username & password.value === datossesion.password){
    //         // var obtParaLocalStorage = JSON.stringify(datalogin)
    //         // var nombreVarLocalStorage = "login" 
    //         // actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)   

    //     } else {
    //         alert("Los datos son incorrectos")
    //         formLogin.reset() //limpia el form login
    //     }
    // })

    var formCrearUser = document.getElementsByName("formCrearUser")
    var buttonCrearUser = document.getElementById("crear")
 

 //formulario para REGISTRAR DATOS DE USUARIO. GUARDA LOS DATOS VALIDA Y ENTRA A AL INDEX TABLERO

/// CREAR FUNCION REGISTRARUSUARIO

function creaUser(){ 
    const userApellido = document.getElementById('userApellido')
    const userNombre = document.getElementById('userNombre')
    const userEmail = document.getElementById('userEmail')
    const userTelefono = document.getElementById('userTelefono')
    const userClave = document.getElementById('userClave')
    const userRClave = document.getElementById('userRClave')

    //validaciones de campos del form registro de usuarios.
    if(userApellido.value == 0 ){
        alert("El campo Apellido es obligatorio")
    }else if (userNombre.value == 0){
        alert("El campo Nombre es obligatorio")
    }else if (userEmail.value == 0){
        alert("El campo Email es obligatorio")
    }else if (userTelefono.value == 0){
        alert("El campo Teléfono es obligatorio")
    }else if(userClave.value == 0){
        alert("El campo Clave es obligatorio")
    }else if (userClave.value != userRClave.value ){
        alert("las claves deben coincidir")
    }else{

    const dataUserNuevo = {
    id: Date.now(),
    apellido: userApellido.value,
    nombre: userNombre.value,
    mail: userEmail.value,
    telefono: userTelefono.value,
    username: userEmail.value,
    password: userClave.value,
    color: '#77aaff',
    tipoUser: 'ADMINISTRADXR'
    }

    users.push(dataUserNuevo)

    var obtParaLocalStorage = JSON.stringify(users)
    var nombreVarLocalStorage = "users" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    datalogin = {
        username: dataUserNuevo.username,
        password: dataUserNuevo.password
    }
    var obtParaLocalStorage = JSON.stringify(datalogin)
    var nombreVarLocalStorage = "login" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    
    alert("Los datos fueron guardados con éxito, ya puedés ingresar a Lilo, bienvenido!!"+
    "\nGuardá tus tus datos de ingreso:\nUsuario: "+
    userEmail.value+",\nPassword:"+userClave.value)

    //limpia el form
    userApellido.value = ''
    userNombre.value = ''
    userEmail.value = ''
    userTelefono.value = ''
    userEmail.value = ''
    userClave.value = ''
    noEliminar() // cierra el modal

    // document.getElementById('userSesion').innerHTML = datossesion.username
    // formCrearUser.reset() // limpia el form (solo sirve si es un addEventListener)
    window.location = "index-tableros.html";
    }
}

}catch (error){
        console.log ("No se Obtubieron datos de usuario del localStorage. No se cargó el fomr Login" + error)
}


////////// FIN LOGIN ////////////



/////////// TABLEROS ////////////

//obtiene las tareas y los tableros guardados
let tableroStorage = localStorage.getItem('tablerosHtml')

try{ 

    // document.getElementById('userSesion').innerHTML = `<i class="fa-solid fa-user"></i>${datossesion.username}`
    //cheque si hay tableros html no objetos guardados en el localstorage
    if(tableroStorage === null){
        console.log("no hay tableros guardados")
    }else{
        document.getElementById('tableros').innerHTML = tableroStorage

    }
}catch(error){
    console.log('En esta página no se cargan los tableros')
}

try {
/// CREAR TABLEROS //////
clickTabs()
const tablerosGuardados = []
const dataTableroNuevo = {
    id: '',
    color: '',
    titulo: ''   
}

let editandoTableros = false

var formAgregarTablero = document.querySelector('#formAgregarTablero')
var formTableroNombre = document.getElementById('formTableroNombre')
var formTableroColor = document.getElementById('formTableroColor')
var elementoTabsBody = document.querySelector('#tabs_body_id') 
var elemetoTabsHead = document.querySelector('#tabs_head_id')
// var btnFormAgregarTablero = document.querySelector('#btnAddTablero')


function addTablero(){

    if(formTableroNombre.value === ''){
        alert('Tienes que ponerle un nombre al Tablero Nuevo')
        return  

    }else if(editandoTableros){
        dataTableroNuevo.titulo = formTableroNombre.value.toUpperCase()
        dataTableroNuevo.color = formTableroColor.value

        var tableroTituloEditado = document.getElementById('t-'+dataTableroNuevo.id)
        tableroTituloEditado.style.background =  dataTableroNuevo.color
        tableroTituloEditado.textContent = dataTableroNuevo.titulo
    
        // //agregar boton editar al titulo del tablero
        // const btnEditar = document.createElement('button')
        // btnEditar.onclick = () => cargarTablero(dataTableroNuevo)
        // btnEditar.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        // btnEditar.classList.add('btn-editar')
        // tableroTituloEditado.append(btnEditar)
        
        //agregar boton eliminar al titulo del tablero
        const btnEliminar = document.createElement('button')
        btnEliminar.onclick = () => eliminarTablero(dataTableroNuevo.id)
        btnEliminar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        btnEliminar.classList.add('btn-editar')
        tableroTituloEditado.append(btnEliminar)

        var tableroContenidoEditado =  document.getElementById('c-'+dataTableroNuevo.id)
        tableroContenidoEditado.style.background = dataTableroNuevo.color
        
        var obtParaLocalStorage = document.getElementById("tableros").innerHTML
        var nombreVarLocalStorage = 'tablerosHtml' 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        formAgregarTablero.reset()
        //manda al formulario agregar tareas/nombre de tableros, el nombre nuevo del tablero que se acaba de editar
        document.querySelector('#tableroNombre').textContent = nombreTablero
        
        btnFormAgregarTablero.textContent = "Agregar"
        clickTabs()
        editandoTableros = false
    }else{
         //CREAR UN TABLERO
         dataTableroNuevo.id= Date.now(),
         dataTableroNuevo.titulo = formTableroNombre.value.toUpperCase(),
         dataTableroNuevo.color = formTableroColor.value.toUpperCase()

         //se crea el elemento Titulo del tablero y agrego: clase tabs_toggle, agrego id, color y titulo
         var elementoNewTabsHead = document.createElement("li")
         elementoNewTabsHead.style.background = dataTableroNuevo.color
         elementoNewTabsHead.classList.add('tabs_toggle')
         elementoNewTabsHead.textContent = dataTableroNuevo.titulo
         elementoNewTabsHead.id = 't-'+dataTableroNuevo.id

         // //al titulo agrego dos botones, editar y elminar
         // const btnEditar = document.createElement('button')
         // btnEditar.onclick = () => cargarTablero(dataTableroNuevo)
         // btnEditar.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
         // btnEditar.classList.add('btn-editar')
         // elementoNewTabsHead.append(btnEditar)
         
         const btnEliminar = document.createElement('button')
         btnEliminar.onclick = () => eliminarTablero(dataTableroNuevo.id)
         btnEliminar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
         btnEliminar.classList.add('btn-editar')
         elementoNewTabsHead.append(btnEliminar)
         
         //creo el elemento cuerpo de tablero
         var elementNewTabsBody = document.createElement("div")
         elementoTabsBody.style.background = dataTableroNuevo.color
         elementNewTabsBody.classList.add('tabs_content')
         elementNewTabsBody.id = 'c-'+dataTableroNuevo.id

         var tableroVacio = `
         <div  class="board-list" > 
         <div class="list-title">QUE HACER</div>
         <div id='list1-${dataTableroNuevo.titulo}'>
         </div>
         </div>
         <div id='list2-${dataTableroNuevo.titulo}' class="board-list">  
         <div class="list-title">HACIENDO</div> 
         </div>
         <div id='list3-${dataTableroNuevo.titulo}' class="board-list"> 
         <div class="list-title">HECHO</div></div>`

         elementNewTabsBody.innerHTML = tableroVacio
     
         elemetoTabsHead.appendChild(elementoNewTabsHead)
         elementoTabsBody.appendChild(elementNewTabsBody)

         // En el formulario de tareas agrego el titulo del tablero recien creado al div titulo de tablero
         document.querySelector('#tableroNombre').textContent = dataTableroNuevo.titulo

         var obtParaLocalStorage = document.getElementById("tableros").innerHTML
         var nombreVarLocalStorage = 'tablerosHtml' 
         actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        clickTabs()

         formAgregarTablero.reset()
         editandoTableros = false
          limpiarObjTablero()
    }

}


    function  clickTabs(){
        //hay que volver a cargar el array de elementos con las mismas clases
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
        contents[index].classList.add('is-active'); 
        tabs[index].classList.add('is-active');
        var esto = tabs[index].style.background
        console.log(esto)
        console.log(tabs)
        console.log(contents)
        contents[index].style.background = esto

        //para obtener el nombre del tablero
        document.querySelector('#tableroNombre').textContent = tabs[index].textContent
        // console.log(nombreTablero)

        var obtParaLocalStorage = document.getElementById("tableros").innerHTML
        var nombreVarLocalStorage = 'tablerosHtml' 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
    });
    });            
     }

        //esta función no se está usando por el momento.
    function agregarTablero(){
        tablerosGuardados.push({...dataTableroNuevo})
        var obtParaLocalStorage = JSON.stringify(tablerosGuardados)
        var nombreVarLocalStorage = "tablerosObj" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
    }

    function limpiarObjTablero(){
        dataTableroNuevo.titulo = ''
        dataTableroNuevo.color = ''
    }

    function cargarTablero(dataTableroNuevo){
        const {id,titulo, color} = dataTableroNuevo

        formAgregarTablero.formTableroNombre.value = titulo
        formAgregarTablero.formTableroColor.value = color

        dataTableroNuevo.id = id

        btnFormAgregarTablero.textContent = "Actualizar"

        editandoTableros = true


    }

    function eliminarTablero(id){
        console.log(id)
        document.querySelector("#modal-generico-contenido").innerHTML = `<div><p>¿Estás seguro que querés eliminar este Tablero? recordá que se elminaran las tareas que tengas cargadas en el.</p><button type="button" onclick="siEliminarTablero(${id})">Eliminar</button><button type="button" class= "cerrar-modal-generico"  onclick="noEliminarTablero()">NO</button></div>`
        document.querySelector("#modal-generico").showModal()
        
    }
    
    function noEliminarTablero(){
        modalGenerico.close()
    }
    
    function siEliminarTablero(id){
            document.getElementById('t-'+id).remove()
            document.getElementById('c-'+id).remove()
            
            modalGenerico.close()

            //actualiza el objeto tableros que está en el localstorage
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            
            tabs = document.querySelectorAll('.tabs_toggle'),
            contents = document.querySelectorAll('.tabs_content');

            document.querySelector('#tableroNombre').textContent = ''
            formAgregarTablero.reset()
    }

}catch(error){
console.log('no se actualizaó tableros' + error)
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

    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

try{
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

// PARA AGREGAR TAREAS NUEVAS
try{
    const $form = document.getElementById("formAgregarTarea")
    
    const $btnAdd = document.getElementById("btnAddTarea")
    // console.log(nombreTablero)
    $btnAdd.addEventListener("click", (event) => {
        // const tableroNombre = document.getElementById('tableroNombre').value
        // console.log(nombreTablero)
        var nombreTablero =  document.querySelector('#tableroNombre').textContent
        const $divElements = document.getElementById("list1-"+nombreTablero)
        if($form.formAgregarTareaUsuario.value === '' && $form.formAgregarTareaDescripcion.value.trim() === ''){ 
            alert("Para agregar una Tarea tenés que completar todos los campos")
        }else if($divElements === null){
            alert("No has elegido un tablero. Para elegirlo hace click en el nombre del tablero.")
        }else{

            let colorUser
            var users = JSON.parse(localStorage.getItem("users"))
            // console.log($form.formAgregarTareaUsuario.value)

            users.map( usuario => {
                if( usuario.mail === $form.formAgregarTareaUsuario.value){
                    console.log(usuario.color)
                        colorUser =  usuario.color
                }
            })
            
            // console.log($divElements)
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.style.background = colorUser
            $div.id = "c"+Date.now()
            $div.draggable = true
            $div.innerHTML =
                `<div id="priodidad"><i class="fa-regular fa-clipboard"></i>-<strong>${$form.formAgregarTareaTipoPrioridad.value}</strong></div> 
                <div id="user"><i class="fa-solid fa-user"></i>-${$form.formAgregarTareaUsuario.value}</div>
                <div id="tarea"><i class="fa-solid fa-thumbtack">-</i>${$form.formAgregarTareaDescripcion.value.trim()}</div>
                <button type="button" class="delete" onclick= "editarTarea(event)">Editar</button>
            <button class="delete" onclick="removeElement(event)">X</button>`    
            $divElements.appendChild($div, $divElements.firstChild)
            document.getElementById("tituloformTarea").textContent = 'AGREGAR TAREA'
            $form.reset()

            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            console.log('guardado tableros en localStorage')
        }
    
})

}catch (error){
console.log('no se cargaron eventos del formulario de tareas nuevas' + error)
}


    //FUNCION PARA AVISAR QUE SE ESTá POR ELMINAR TAREAS Y FUNCION PARA ELIMINAR TAREAS

    function removeElement(event) {
    
        document.querySelector("#modal-generico").innerHTML = 
        `<div>
        <p>¿Estás seguro que querés eliminar la tarea?</p>
        <div class="modal-footer">
        <button type="button" id="siEliminar">Eliminar</button>
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
</div>
        </div>`
        document.querySelector("#modal-generico").showModal()
        document.querySelector("#siEliminar").addEventListener('click',()=>{
            event.target.parentElement.remove()
            modalGenerico.close()
            //actualiza el objeto tableros que está en el localstorage
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        })
        // document.querySelector("#noEliminar").addEventListener('click',()=>{
        //     modalGenerico.close()
        // })
    }

    try {
        // Función para editar tareas cargadas en los tableros.
        function editarTarea(event){
        // const editarTarea = document.querySelector('#editarTarea').addEventListener("click", (event) =>{
            console.log(event.target.parentElement.querySelector("#tarea").textContent)
            var datoPrioridad = event.target.parentElement.querySelector("#priodidad").textContent
            var datoUsuario = event.target.parentElement.querySelector("#user").textContent
            var datoTarea = event.target.parentElement.querySelector("#tarea").textContent.trim()
            //No se porque el valor viene con lo que parece el placeholder. averiguar por qué
            
            // const datosTarea = event.target.parentElement.querySelectorAll("div")
            document.getElementById("formAgregarTareaTipoPrioridad").value = datoPrioridad
            document.getElementById("formAgregarTareaUsuario").value = datoUsuario
            document.getElementById("formAgregarTareaDescripcion").value = datoTarea
            document.getElementById("tituloformTarea").textContent = 'EDITAR TAREA'
            // document.querySelector("#modal-formEditarTarea").showModal()

            event.target.parentElement.remove()

            // document.querySelector("#btnEdit").addEventListener('click',()=>{

            // datoPrioridad = document.getElementById("formEditarTipoPrioridad").value 
            // datoUsuario = document.getElementById("formEditarUsuario").value
            // datoTarea = document.getElementById("descripcionEditar").value 
            
            // document.querySelector("#modal-formEditarTarea").close()

            //})
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)


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
                localStorage.setItem('tablerosHtml', tableros)
                // console.log(tableros)
        // para guardar en el localstorage lo que el usuario está trabajando.
        }
    }

////////////  FIN TAREAS /////////////

///////// USUARIOS ////////////////////

    //chequea si hay usuarios Registrados guardados en el localstorage 
    var users = JSON.parse(localStorage.getItem("users"))
    if(users === null){
        users = []
        console.log("NO hay Usuarios Registrados guardados en el LocalStorage")
    }else{
        console.log("HAY Usuarios Registrados guardados en el LocalStorage")
    }

    let editando = false;
    var $formUsers = document.getElementById("frmUsers")
    // const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAddUser")

    const $users = document.getElementById('menuUsers')


    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

    try{
        mostrarUsers()
        const dataUserNuevo = {
            id: '',
            apellido: '',
            nombre: '',
            mail:  '',
            telefono:'',
            username:'',
            password:'',
            color: '',
            tipoUser:''   
        }


        // PARA CREAR MIEMBROS EN PANTALLA USUARIOS       
        $btnAdd.addEventListener("click", () => {
            if($formUsers.formUserNewNombre.value === "" || $formUsers.formUserNewApellido.value === "" || $formUsers.formUserNewEmail.value === "" ||
                $formUsers.formUserNewTelefono.value === "" || $formUsers.formUserNewColor.value === "" || $formUsers.formUserNewTipoUsuario.value === "" 
                ){
                alert("Complete los campos")
                return
            }
            if(editando){
                editarUser()
                editando = false

            }else{
            
                dataUserNuevo.id= Date.now(),
                dataUserNuevo.apellido= $formUsers.formUserNewApellido.value.toUpperCase(),
                dataUserNuevo.nombre= $formUsers.formUserNewNombre.value.toUpperCase(),
                dataUserNuevo.mail= $formUsers.formUserNewEmail.value,
                dataUserNuevo.telefono = $formUsers.formUserNewTelefono.value,
                dataUserNuevo.username = $formUsers.formUserNewEmail.value,
                dataUserNuevo.password =  'falta',
                dataUserNuevo.color = $formUsers.formUserNewColor.value,
                dataUserNuevo.tipoUser =  $formUsers.formUserNewTipoUsuario.value    

                agregarUser()
            }
        })

    function agregarUser(){
        users.push({...dataUserNuevo})
        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        mostrarUsers()
        $formUsers.reset()
        limpiarObjUser()
        
    }

    function limpiarObjUser(){
        dataUserNuevo.id = ''
        dataUserNuevo.apellido = ''
        dataUserNuevo.nombre = ''
        dataUserNuevo.mail = ''
        dataUserNuevo.telefono = ''
        dataUserNuevo.username = ''
        dataUserNuevo.password = ''
        dataUserNuevo.color = ''
        dataUserNuevo.tipoUser = ''
    }
       
    function mostrarUsers(){
        limpiarHTML()
        const $divElements = document.querySelector(".listaUsers")
        users.forEach( usuario =>{
            const {id, apellido, nombre, mail, telefono, username, tipoUser, color } = usuario
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.draggable = true
            $div.innerHTML = 
            `<div>${tipoUser}</div><div><i class="fa-solid fa-fingerprint"></i>${id}</div>
            <div class="cardUserName" style="background:${color};"><i class="fa-solid fa-person-half-dress"></i>-<strong>${nombre}-${apellido}</strong></div>
            <div><i class="fa-solid fa-envelope"></i>-${mail}</div>
            <div><i class="fa-solid fa-user"></i>-${username}</div>
            <div><i class="fa-solid fa-phone"></i>-${telefono}</div>`

            const btnEditar = document.createElement('button')
            btnEditar.onclick = () => cargarUser(usuario)
            btnEditar.textContent = 'Editar'
            btnEditar.classList.add('btn-editar')
            $div.append(btnEditar)

            const btnEliminar = document.createElement('button')
            btnEliminar.onclick = () => eliminarUser(id)
            btnEliminar.textContent = 'Eliminar'
            btnEliminar.classList.add('btn-editar')
            $div.append(btnEliminar)
 
            $divElements.appendChild($div)
        })
    }
    
    function cargarUser(usuario){
        const {id, apellido, nombre, mail, telefono, username, tipoUser, color } = usuario

        $formUsers.formUserNewNombre.value = nombre
        $formUsers.formUserNewApellido.value = apellido
        $formUsers.formUserNewEmail.value = mail
        $formUsers.formUserNewTelefono.value = telefono
        $formUsers.formUserNewColor.value = color
        $formUsers.formUserNewTipoUsuario.value = tipoUser

        dataUserNuevo.id = id

        $btnAdd.textContent = "Actualizar"
        editando = true
    }
    
    function  editarUser(){

        dataUserNuevo.nombre = $formUsers.formUserNewNombre.value.toUpperCase()
        dataUserNuevo.apellido = $formUsers.formUserNewApellido.value.toUpperCase()
        dataUserNuevo.mail = $formUsers.formUserNewEmail.value 
        dataUserNuevo.telefono =  $formUsers.formUserNewTelefono.value 
        dataUserNuevo.color = $formUsers.formUserNewColor.value 
        dataUserNuevo.tipoUser = $formUsers.formUserNewTipoUsuario.value 

        users.map( usuario => {
            if(usuario.id === dataUserNuevo.id){

                usuario.id = dataUserNuevo.id
                usuario.tipoUser = dataUserNuevo.tipoUser
                usuario.apellido = dataUserNuevo.apellido
                usuario.nombre = dataUserNuevo.nombre
                usuario.mail = dataUserNuevo.mail
                usuario.telefono = dataUserNuevo.telefono
                usuario.username = dataUserNuevo.mail
                usuario.color = dataUserNuevo.color
            }
        })

        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)


        // limpiarHTML()
        mostrarUsers()
        $formUsers.reset()
        
        $btnAdd.textContent = "Agregar"
        editando = true
    }

function eliminarUser(id){

    document.querySelector("#modal-generico-contenido").innerHTML = `<div><p>¿Estás seguro que querés eliminar este Usuario?</p><button type="button" onclick="siEliminar(${id})">Eliminar</button><button type="button" class= "cerrar-modal-generico"  onclick="noEliminar()">NO</button></div>`
    document.querySelector("#modal-generico").showModal()
}



// noEliminar

function siEliminar(id){
        users = users.filter(usuario => usuario.id !== id)
        modalGenerico.close()
        console.log(users)
        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        limpiarHTML()
        mostrarUsers()

}


function limpiarHTML() {
    const $divElements = document.querySelector(".listaUsers")
    while( $divElements.firstChild){
        $divElements.removeChild($divElements.firstChild)
    }
    
}
            

        // $btnSave.addEventListener("click", (event) =>{
        //     parameters = parameters.filter(el => el != null)
        //     const $jsonDiv = document.getElementById("jsonDiv")
        //     $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        //     $divElements.innerHTML = ""
        //     parameters = []
        // })


    }catch (error){
        console.log('no se cargaron eventos del formularios de usuario')
    }



/////////// FIN USUARIOS ///////////

/////////// MODAL PERFIL ///////////


const modalPerfil = 
`<div>
<h5>TU PERFIL</h5>
<div>
    <div>
        <label><strong>ID User</strong></label>
        <div id="userIdPerfil"></div>
    </div>
    <div>
        <label><strong>Tipo de Usuario</strong></label>
        <div id="userTipoPerfil"></div>
    </div>
    <div>
        <label><strong>Apellido</strong></label>
        <div id="userApellidoPerfil"></div>
    </div>
    <div>
        <label><strong>Nombre</strong></label>
        <div id="userNombrePerfil"></div>
    </div>
    <div>
        <label><strong>E-mail</strong></label>
        <div id="userEmailPerfil"></div>
    </div>
    <div>
        <label><strong>Telefono</strong></label>
        <div id="userTelefonoPerfil"></div>
    </div>
    <div>
        <label><strong>Pass</strong></label>
        <div id="userClavePerfil"></div>
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    <button type="button"  onclick = "creaUser()" class="btn btn-primary">Editar mis datos</button>
    <button type="button" class="btn btn-secondary"onclick = "cerrarSesion()" ><i class="fa-solid fa-right-from-bracket"></i></button>
</div>
</div>`




/////////// FIN MODAL PERFIL ///////////



//////////// FORMULARIO REGISTRARSE////////



const modalRegistrarUsuario = ` 
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h3 class="modal-title fs-5" id="exampleModalLabel">Crear Usuario</h3>
        <spam>Completar todos los campos.</spam>
    </div>
    <div class="modal-body">
        <form name = "formCrearUser" id="crearUser">
        <div class="mb-3">
            <label for="userApellido" class="col-form-label">Apellido:</label>
            <input type="text"  class="form-control"  name="userApellido" placeholder="Escribe tu Apellido" id="userApellido">
        </div>
        <div class="mb-3">
            <label for="userNombre" class="col-form-label">Nombres:</label>
            <input type="text" class="form-control"  name="userNombre" placeholder="Escribe tu/s Nombres" id="userNombre">
        </div>
        <div class="mb-3">
            <label for="userEmail" class="col-form-label">E-mail:</label>
            <input type="email" class="form-control" name="userEmail" placeholder="Escribe tu E-mail" id="userEmail">
        </div>
        <div class="mb-3">
            <label for="userTelefono" class="col-form-label">Telefono:</label>
            <input type="text" max="10" min="10" class="form-control"  name="userTelefono" placeholder="Escribe tu telefono" id="userTelefono">
        </div>
        <div class="mb-3">
            <label for="userClave" class="col-form-label">Clave:</label>
            <input type="password" class="form-control" name="userClave" placeholder="Escribe tu clave" id="userClave">
        </div>
        <div class="mb-3">
            <label for="userRClave" class="col-form-label">Repetir Clave:</label>
            <input type="password" class="form-control"  name="userRClave" placeholder="Escribe tu clave" id="userRClave">
        </div>
    </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
        <button type="button"  onclick = "creaUser()" class="btn btn-primary">Crear Usuario</button>
    </div>

    </div>
</div>
`



const modalOlvidasteClave = `<div class="modal-dialog">
<div class="mb-3">
<h2 class="col-form-label">
    SERVICIO INHABILITADO TEMPORALMENTE
</h2>
    <div class="col-form-label" >
        Por el momento esta web no está conectado a un servicio de mail. Si no recuedas tu datos te invitamos a que generes un nuevo usuario.  
    </div> 
</div>
<div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
    </div>   
</div>`


const modalQueEs = `

<p>
                        El objetivo de la Lilo es facilitar el seguimiento de las tareas que realizan los miembros de un equipo de trabajo y dinamizar el flujo de trabajo.
                    </p>
                    <p>
                        Está basado en el método de Kanban, en donde las tareas se agrupan en tres grandes estados: que hacer, haciendo, hecho; permitiendo al equipo visualizar gráficamente como la posición actual del proyecto, viendo cuales son las tareas pendientes, las que se están realizando y las que ya han sido concluidas ; el sistema busca optimizar el rendimiento del tiempo.
                    </p>
                    <p>

<div>
<p>Mirá el video para ver en acción a Lilo. </p> 
</div>
<div>
<video width="300" height="200" controls>
    <source src="IMG/como-agregar-mover-tareas.mov">
</video>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
</div>
</div>

`
// const btnAbrirModalPerfil = document.querySelector("#userSesion")
// btnAbrirModalPerfil.addEventListener("click",()=>{
   
// })


function abrilModal(){
    
    modalGenericoContenido.innerHTML = modalPerfil
    modalGenerico.showModal()
    mostrarperfil()
    
}

function mostrarperfil(){

    //obtener todos los datos del usuario sacandolos de 
    console.log(users)
    console.log("-"+document.getElementById('userSesion').textContent+"-")
    users.map( usuario => {
        if( usuario.username === document.getElementById('userSesion').textContent  ){
            document.getElementById("userIdPerfil").innerHTML = usuario.id
            document.getElementById("userTipoPerfil").innerHTML = usuario.tipoUser
            document.getElementById("userApellidoPerfil").innerHTML = usuario.apellido
    document.getElementById("userNombrePerfil").innerHTML = usuario.nombre
    document.getElementById("userEmailPerfil").innerHTML = usuario.mail
    document.getElementById("userTelefonoPerfil").innerHTML = usuario.telefono
    document.getElementById("userClavePerfil").innerHTML = usuario.password
        }
    })
}

try{


    // abre modalRegistrarUsuario
    const btnAbrirModalRU = document.querySelector("#btn-abrir-modal-RegistroUsuario")
    btnAbrirModalRU.addEventListener("click",()=>{
        modalGenericoContenido.innerHTML = modalRegistrarUsuario
        modalGenerico.showModal()
    })
    // abre modal Olvide clave 
    const btnAbrirModalOU = document.querySelector("#btn-abrir-modal-OlvidasteUsuario")
    btnAbrirModalOU.addEventListener("click",()=>{
        modalGenericoContenido.innerHTML = modalOlvidasteClave
        modalGenerico.showModal()
    })
    // abre modal que es lilo
    const btnAbrirModalQE = document.querySelector("#btn-abrir-modal-QueEs")
    btnAbrirModalQE.addEventListener("click",()=>{
        modalGenericoContenido.innerHTML = modalQueEs
        modalGenerico.showModal()
    })

 


}catch(error){
    console.log('no se escucha el Registrar Usuario/Olvidaste clave/que es lilo' + error)
}



////////// FIN FORMULARIO REGISTRARSE////////

////////////////// AGRADECIMIENTOS ////////////////

    const ventanaGracias = ` <h2>AGRADECIMIENTOS</h2>
    <p>
    Este site fue contruido gracias al aporte de los siguientes canales y personas que comparten su conocimiento 
    </p>
    <div>
    <a href="https://www.youtube.com/c/AsperosGeek" target="_blank" >Asperos Geek</a>
    </div>
    <div>
    <a href="https://www.youtube.com/user/jmarco2000" target="_blank" >Javier Marco</a>
    </div>
    <div>
    <a href="https://www.youtube.com/channel/UC019ue15AkWD0Nc0S5e1gcw"  target="_blank">Programando el Destino</a>
    </div>
    <div>
    <a href="https://bobtomlin-70659.medium.com"  target="_blank">Rob Tomlin</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/EnhanceCoding"  target="_blank">Enhance Coding</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/FaztTech"  target="_blank">Fazt</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/DorianDesings"  target="_blank">Dorian Desings </a>
    </div>
    <div>
    <a href="https://www.youtube.com/channel/UCfag1vW28FRLAp0JC6vkF8Q"  target="_blank">dev.xcheko51x
    </a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/FalconMasters"  target="_blank">FalconMasters</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/midudev"  target="_blank">midudev</a>
    </div>
    <div>

    <a href="https://www.youtube.com/c/MozartGarcía"  target="_blank">Mozart García
    </a>
    </div>

    <div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
    </div>
    `

try{

    btnAbrirModalGracias = document.querySelector("#btn-abrir-modal-gracias")
    btnAbrirModalGracias.addEventListener("click",()=>{
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
 

