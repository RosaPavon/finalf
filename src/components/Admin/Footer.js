import React from "react"
import logo from "../../images/logo.png"
import { Image} from "react-bootstrap"




function Footer(){
    return(
        <>

<footer class="nb-footer">
<div class="container">
<div class="row">


<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <Image href="/logged/home" src={logo} fluid   width="140" height="140"/>

</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Contacto</h2>
  <p>Contacta con Nosotros en cookandcook@gmail.com</p>

</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Seguridad y privacidad</h2>
  <ul class="list-unstyled">
    <li><p title=""><i class="fa fa-angle-double-right"></i> Términos y condiciones</p></li>
    <li><p  title=""><i class="fa fa-angle-double-right"></i> Politica de privacidad</p></li>
  </ul>
</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Comunidad</h2>
  <p>Todas las recetas de Cook anda Cook han sido registradas por nuestros usuario y la derechos de emplotación de la misma corresponden al usuario en cuestión.</p>
  
</div>
</div>
</div>
</div>

<section class="copyright">
<div class="container">
<div class="row">
<div class="col-sm-6">
<p>Copyright © 2021. CookandCook.RosaPavón.</p>
</div>
<div class="col-sm-6"></div>
</div>
</div>
</section>
</footer>
        </>
    )
}

export default Footer