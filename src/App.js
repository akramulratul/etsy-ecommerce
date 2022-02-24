import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Heading from './components/Heading/Heading';
import NewArrival from './components/New-arrival-item/NewArrival';
import Discount from './components/Discount/Discount';
import Footer from './components/Footer/Footer';
import Favourite from './Pages/Favourite/Favourite';
import PublicProfile from './Pages/PublicProfile/PublicProfile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Heading></Heading>
        <NewArrival></NewArrival>
        <Discount></Discount>
        <Footer></Footer>
       
        
        
        
      </header>
    </div>
  );
}

export default App;
