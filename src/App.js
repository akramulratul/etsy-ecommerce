import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Heading from '.';
// import NewArrival from './components/New-arrival-item/NewArrival';
// import Discount from './components/Discount/Discount';
// import Footer from './components/Footer/Footer';
// import Favourite from './Pages/Favourite/Favourite';
// import PublicProfile from './Pages/PublicProfile/PublicProfile';

import NavBar from "./components/navbar/NavBar";
import { createContext, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/register/SignUp";
import Home from "./Pages/HomePage/Home/Home";
import Favourite from "./Pages/Favourite/Favourite";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Navbar></Navbar>
    //     <Heading></Heading>
    //     <NewArrival></NewArrival>
    //     <Discount></Discount>
    //     <Footer></Footer>

    //   </header>
    // </div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Switch>
            <header className="App-header">
              <NavBar></NavBar>
              {loggedInUser.name && <h1>WELCOME {loggedInUser.name}</h1>}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/profile">
                <Favourite />
              </Route>
            </header>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
