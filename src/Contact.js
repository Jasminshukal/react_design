import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import { useState } from "react";

function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    async function sendMassage()
    {
        // console.warn(name,email,message);
        const formData=new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("message",message);
        console.log(formData);
     }

  return (
        <section className="section colored" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Send Us an Enquiry</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>For Enterprise Package or A Custom Package<br/>Please Fill-up the form and Send us an Enquiry. Thank you.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" offset-lg-2 col-lg-8 offset-md-4 col-md-4 col-sm-12">
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                <fieldset>  
                                    <input name="name" type="text" className="form-control" id="name" 
                                    onChange={(e)=>setName(e.target.value)} placeholder="Full Name" required="" />
                                </fieldset>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                <fieldset>
                                    <input name="email" type="email" className="form-control" id="email" 
                                    onChange={(e)=>setEmail(e.target.value)} placeholder="E-Mail Address" required="" />
                                </fieldset>
                                </div>
                                <div className="col-lg-12">
                                <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required="" 
                                    onChange={(e)=>setMessage(e.target.value)}></textarea>
                                </fieldset>
                                </div>
                                <div className="col-lg-12">
                                <fieldset>
                                    <button className="main-button"
                                    onClick={sendMassage}>Send Message</button>
                                </fieldset>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
    }

export default Contact;
