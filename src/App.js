import Heder from "./Heder";
import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Pricing from "./Pricing";

import './css/custome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Heder/>
        <Banner/>
        <Features />
        <Pricing />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
