import React from 'react';
import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';


class Pricing extends React.Component {
 state = {
     loading:true,
     pricList:null
 };
    async componentDidMount()
    {
        const url="https://www.app.mailpokes.com/api/v1/plans?api_token=yHYGsIPF5OV2gHGqSERx6JF1JYUs5iIiKffNcXxOqxZuSNFR8ci8GvXqEVkY";
        const response =await fetch(url);
        const data = await response.json();
        const list = data.map(name=>{
            return (
                <div className="pricing-item" key={name.uid}>
                    <div className="pricing-header">
                        <h3 className="pricing-title">{name.name}</h3>
                    </div>
                    <div className="pricing-body">
                        <div className="price-wrapper">
                            <span className="currency">$</span>
                            <span className="price">500</span>
                            <span className="period"> 1 Year </span>
                        </div>
                        <ul className="list">
                            <li className="active">list 1</li>
                            <li className="active">list 2</li>
                            <li className="active">list 3</li>
                        </ul>
                    </div>
                    <div className="pricing-footer">
                        <a href="#parchse" className="main-button">Purchase Now</a>
                    </div>
                </div>
            )
        });
        // console.log(list);
        // console.log(data);
        
        this.setState({pricList:list});
        
    }
    render(){
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
            <div className="col-lg-3 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                {list}
            </div>
        </div>
        {/* End Row */}
    </div>
    </section>
    
    );
  }
}

export default Pricing;