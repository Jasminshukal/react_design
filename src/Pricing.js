import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import React,{ useEffect,useState} from "react";

function Pricing() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://www.app.mailpokes.com/api/v1/plans?api_token=yHYGsIPF5OV2gHGqSERx6JF1JYUs5iIiKffNcXxOqxZuSNFR8ci8GvXqEVkY').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        });
    }, [])
  return (
    <section className="section colored" id="pricing-plans">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="center-heading">
                    <h2 className="section-title">Pricing Plans</h2>
                </div>
            </div>
        </div>
        <div className="row">

                {
                    data.map((data)=>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">{data.name}</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">{data.price}</span>
                                        <span className="period">{data.frequency_amount} {data.frequency_unit}</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">{data.description}</li>
                                        
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="https://www.app.mailpokes.com/login" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div> 
                    )
                }
        </div>
    </div>
    </section>
    );
    }

export default Pricing;
