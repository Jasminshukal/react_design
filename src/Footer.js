import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import './css/font-awesome.css';


function Footer() {
  return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <ul className="social">
                            <li><a href="#f"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#t"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#l"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#r"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#d"><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="copyright">Copyright &copy; 2021 Mailpokes Email Marketing | Designed & Developed : <a href="https://www.anantsoftcomputing.com/">Anant Soft Computing</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
    }

export default Footer;
