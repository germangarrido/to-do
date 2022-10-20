let cad=`
<h1>La cocina de Juan</h1>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="about.html">Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contacto</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="location.html">Sucursal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="form.html">Registrarse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="NuestrosProductos.html">Nuestros Productos</a>
      </li>
    </ul>
</nav>
`
document.getElementById("idheader").innerHTML=cad;

cad=`
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.facebook.com/marcela.cerda.9" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.pinterest" target="_blank"><i class="fa fa-pinterest"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com/marcela.ines.cerda/" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.linkedin.com/in/marcela-cerd%C3%A1-678b05196/" target="_blank"><i
        class="fa fa-linkedin" aria-hidden="true"></i></a>
    <p>Derechos reservados @2020 </p>
`
document.getElementById("idfooter").innerHTML=cad;



if ( document.getElementById( "idcarousel" )) {

  cad=` 
  <!-- un indicador por cada imagenes -->
  <ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  `
  for(var i=1; i< data.length;i++){
    cad+='<li data-target="#demo" data-slide-to="'+i+'"></li>'
  }
  cad+=`
  </ul>
  `
  cad+=`
  <!-- The slideshow -->
  <div class="carousel-inner">
    `
    for(var i=0; i< data.length;i++){  

      cad+=`<div class="carousel-item  `
      if(i==0)
        cad+=` active">`
      else
        cad+=`">`;

      cad+=`
      <img src="${data[i].imagen}" alt="${data[i].nombre}" width="50" height="50">
      <div class="carousel-caption">
        <h3>${data[i].nombre}</h3>
        <p>${data[i].descripcion}</p>
      </div>
    </div>
  `}
  cad+=`
  </div>
  ` 
  console.log(cad)
  document.getElementById("idcarousel").innerHTML=cad;
}

if ( document.getElementById( "productos" )) {
   cad=`
      <h2>Nuestros Productos</h2>
      <div class="container">
        
        `
        for(var i=0; i<data.length; i++){
          cad+=`
            <div class="card" style="width:31%; float:left; margin:1% 1%">
              <img class="card-img-top" src="${data[i].imagen}" alt="Card image" style="width:100%">
              <div class="card-body">
                  <h4 class="card-title">${data[i].nombre}</h4>
                  <p class="card-text">${data[i].descripcion}</p>
                  <a href="#" class="btn btn-primary">Ver Producto</a>
              </div>
            </div>
          `
        }

      cad+=`  
      </div>
      `

      console.log(cad);
  document.getElementById("productos").innerHTML=cad;
}




if ( document.getElementById( "idtabla" )) {
  // la tabla tiene un encabezado fijo
  cad=`
      <p> Esto esta generado por JS<p>
      <table>
          <tr>
            <th>Nombre</th>
            <th>Descipcion</th>
            <th>Imagen</thd>
          </tr>
    `
    // y ademas tiene un contenido que varia segun data
    for(var i=0; i<data.length; i++){
      cad+=`      
          <tr>
            <td>${data[i].nombre}</td>
            <td>${data[i].descripcion}</td>
            <td>
               <img src="${data[i].imagen}" >
            </td>
          </tr>
        `
    } 
    // le agrego el cierre de la etiqueta table 
    cad+=`
        </table>
      `
      console.log(cad); // veo por consola si arme bien table
// modifico el contenido de la etiqueta HTML que tiene
// id="idtabla", con el contenido de la variable cad
      document.getElementById("idtabla").innerHTML=cad;
}


