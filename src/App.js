import NavBar from './components/navbar/NavBar';
import { createContext, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/Login';
import SignUp from './components/register/SignUp'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Switch>
            <header className="App-header">
              <NavBar></NavBar>
              {loggedInUser.name && <h1>WELCOME {loggedInUser.name}</h1>}
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </header>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
