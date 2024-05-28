
import 'bootstrap-icons/font/bootstrap-icons.css';



const Footer = () => {
    return ( 
        
<footer>
  <div className="container-fluid" style={{width: '100%'}} >
      <div className="row p-5 bg-secondary text-white">
          <div className="col mb-3">  
              <div className="xhifire-logo">
                  <img src="pic/mentaloasislogo.png" alt="XHIFIRE2024" className="logo-image" width="110"/>
                  <p className="text-body-secondary mb-0">© <span className="fw-semibold">XHIFIRE2024</span></p>
              </div>
              <p className="mini-paragraph">Siguenos en nuestras Redes Sociales</p>
              <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#833AB4" , fontSize : "32px" }} >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className="text-dark" style={{ fontSize : "32px" }}  >
          <i className="bi bi-x"></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#DB4437", fontSize : "32px"  }} >
          <i className="bi bi-google"></i>
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#60" , fontSize : "32px" }} >
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2", fontSize : "32px"  }} >
          <i className="bi bi-facebook "></i>
        </a>
      </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3">MENÚ RÁPIDO</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">ODS 3</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Salud Mental</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Depresión</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Estrés</a>
              </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3">SOBRE NOSOTRAS</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Nuestra Historia</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Nuestra Misión</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Nuestros Valores</a>
              </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3">LÍNEAS DE EMERGENCIA</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Línea libre para niñas, niños y
                      adolescentes:
                      1515</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Whatsapp mujer: +569 9700 7000</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Fono infancia: 800 200 188</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">Fono salud mental: 600 360 7777</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none" href="#">SOS: 171</a>
              </div>
          </div>
      </div>
  </div>
</footer>

    
    )
}

export default Footer