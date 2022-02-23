import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';
import Heading from './components/Heading/Heading';
// import "../../etsy-ecommerce/src/assets/Images/"
import NewArrival from './components/New-arrival-item/NewArrival';
import Discount from './components/Discount/Discount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Heading></Heading>
        <NewArrival></NewArrival>
        <Discount></Discount>
        
      </header>
    </div>
  );
}

export default App;
