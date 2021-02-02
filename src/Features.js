import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import LogoWhite from "./images/logo.png";

function Features() {
  return (
        <section className="section home-feature" id="features" style={{PaddingTop:'10px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-text-center">
                                    <h1 style={{MarginBottom:'-92px',MarginTop:'0px'}}>Features</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                <div className="features-small-item">
                                    <div className="icon">
                                        <img className="img-fluid" style={{Width:'65px',padding:6}} src={LogoWhite} alt="" />
                                    </div>
                                    <h5 className="features-title">Modern Strategy</h5>
                                    <ul className="div-ul">
                                        <li>• Easy to use Email Marketing Tool</li>
                                        <li>• Create Email Template with rich editor</li>
                                        <li>• Send Unlimited Email with your Created Template.</li>
                                        <li>• Multiple SMTP & PHP Mail</li>
                                        <li>• Amazon SES, Mailgun Integration</li>
                                        <li>• Maildrill SMTP Integration</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                <div className="features-small-item">
                                    <div className="icon">
                                        <img className="img-fluid" style={{Width:'65px',padding:6}} src={LogoWhite} alt="" />
                                    </div>
                                    <h5 className="features-title">Ultimate Marketing</h5>
                                    <ul className="div-ul">
                                        <li>• Create Email Group/ list</li>
                                        <li>• Upload Email list form CSV file</li>
                                        <li>• Nice & clean email list / group management</li>
                                        <li>• Login with Social Media.</li>
                                        <li>• Mobile compatible.</li>
                                        <li style={{width: '124px'}}> Multi language support.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                <div className="features-small-item">
                                    <div className="icon">
                                        <img className="img-fluid" style={{Width:'65px',padding:6}} src={LogoWhite} alt="" />
                                    </div>
                                    <h5 className="features-title">Best Relationship</h5>
                                    <ul className="div-ul">
                                        <li>• Beautiful Dashboard.</li>
                                        <li>• Track user activity</li>
                                        <li>• Manage User.</li>
                                        <li>• Schedule Email.</li>
                                        <li>• Validate email address with our own system for free</li>
                                        <li>• Validate with bulkemailchecker, emaillistverify</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    }

export default Features;
