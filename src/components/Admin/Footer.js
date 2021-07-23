import React from "react"
import logo from "../../images/logo.png"
import { Image} from "react-bootstrap"




function Footer(){
    return(
        <>

<footer className="nb-footer">
<div className="container">
<div className="row">


<div className="col-md-3 col-sm-6">
<div className="footer-info-single">
  <Image href="/logged/home" src={logo} fluid   width="140" height="140"/>

</div>
</div>

<div className="col-md-3 col-sm-6">
<div className="footer-info-single">
  <h2 className="title">Contacto</h2>
  <p>Contacta con Nosotros en cookandcook@gmail.com</p>

</div>
</div>

<div className="col-md-3 col-sm-6">
<div className="footer-info-single">
  <h2 className="title">Seguridad y privacidad</h2>
  <ul className="list-unstyled">
    <li><p title=""><i className="fa fa-angle-double-right"></i> Términos y condiciones</p></li>
    <li><p  title=""><i className="fa fa-angle-double-right"></i> Politica de privacidad</p></li>
  </ul>
</div>
</div>

<div className="col-md-3 col-sm-6">
<div className="footer-info-single">
  <h2 className="title">Comunidad</h2>
  <p>Todas las recetas de Cook and Cook han sido registradas por nuestros usuarios y los derechos de explotación de las mismas pertenecen al usuario en cuestión.</p>
  
</div>
</div>
</div>
</div>

<section className="copyright">
<div className="container">
<div className="row">
<div className="col-sm-6">
<p>Copyright © 2021. CookandCook.RosaPavón.</p>
</div>
<div className="col-sm-6"></div>
</div>
</div>
</section>
</footer>
        </>
    )
}

export default Footer