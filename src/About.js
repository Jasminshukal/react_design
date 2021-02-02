import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import leftImg from "./images/left-image.png";
import rightImg from "./images/right-image.png";
import process from "./images/work-process-item-01.png";


function About() {
  return (
      <div>

        <section className="section padding-top-70 padding-bottom-100" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="info text-center">
                            <h1 style={{MarginBottom: '-100px', MarginTop: '-110px'}}>About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src={leftImg} className="rounded img-fluid d-block mx-auto" alt="App" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                        <div className="left-heading">
                            <h2 className="section-title">We are both analytical and creative</h2>
                        </div>
                        <div className="left-text">
                            <p>We communicate, design, develop and publish… to influence, experience, move and inspire. We understand that there’s more to marketing than making you look good – we go to work every day to help grow your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
            <section className="section colored padding-bottom-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div className="left-heading">
                            <h2 className="section-title">mailpokes.com is where the magic happens</h2>
                        </div>
                        <div className="left-text">
                            <p>Our forward thinking design team will take your vision of generating more revenue  and translate it into the bottom line that not only represents who you are, but captivates and speaks to your future.</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src={rightImg} className="rounded img-fluid d-block mx-auto" alt="App" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mini" id="work-process">
            <div className="mini-content">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="info">
                                <h1 style={{MarginTop:'-205px' , MarginBottom: '-100px'}}>Work Process</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#APP" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>Create<br/>Account</strong>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#Package" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>Buy or Upgrade<br/>Package</strong>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#Create" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>Create Groups & Upload Contacts</strong>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#mibn" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>Create<br/>Email Templates</strong>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#1" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>Send / Schedule the Campaign</strong>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <a href="#1" className="mini-box">
                                <i><img src={process} alt="" /></i>
                                <strong>View<br/>Reports</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
    }

export default About;
