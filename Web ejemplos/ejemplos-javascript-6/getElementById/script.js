let header = `
  <h1>La cocina de Juan</h1>
  <nav>
      <a class="boton" href="index.html">Home</a>
      <a class="boton" href="about.html">Acerca de</a>
      <a class="boton" href="contact.html">Contacto</a>
  </nav>
`
document.getElementById("idheader").innerHTML = header

footer = `
  <a href="https://www.facebook.com" target="_blank">
    <img src="img/facebook.png" alt="facebook">
  </a>
  <a href="https://www.twitter.com" target="_blank">
    <img src="img/twitter.png" alt="twitter">
  </a>
  <a href="https://www.instagram.com" target="_blank">
    <img src="img/instagram.png" alt="instagram">
  </a>
  <p>Derechos reservados @2022</p>
`
document.getElementById("idfooter").innerHTML = footer