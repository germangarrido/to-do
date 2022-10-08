var cad=`
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
document.getElementById("productos").innerHTML=cad;
