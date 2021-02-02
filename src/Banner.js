import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import LogoWhite from "./images/logo.png";


function Banner() {
  return (
    <div className="welcome-area" id="welcome">
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <img style={{Width: '40%'}} className="img-fluid" src={LogoWhite} alt="logo" />
                        <h1>We <strong>Specialise</strong> in <strong>Bulk Email Marketing</strong><br/>and <strong>Email Feedback System Integration</strong>.</h1>
                        <p>Our state of the art software provides you with a modern user interface which is easy to use and efficient. We offer competitive pricing along with lightning prompt support.</p>
                        <a href="#features" className="main-button-slider">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Banner;
