import Heder from "./Heder";
import Banner from "./Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Loading =()=>
    <div className="loading">
      <div></div>
      <div></div>
    </div> 

  // return (
  //   <div className="App">
  //       <Heder/>
  //       <Banner/>
  //   </div>
  // );

  render() {
    state = {
      loading: true,
    };
    
    componentDidMount(){
      this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
    }
    componentWillUnmount() {
       clearTimeout(this.isLoading);
    }
    
    timer = () => setTimeout(()=>{
      this.setState({loading: false})
    }, 2300);
    const {loading} = this.state;
    return (
      loading ? (<Loading/>)
      :(<div className="App">
            <Heder/>
            <Banner/>
        </div>)
    )
  }
}

export default App;
