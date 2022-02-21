import NavBar from './components/navbar/NavBar';
import { createContext, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Switch>
            <header className="App-header">
              <NavBar></NavBar>
              <Route path="/login">
                <Login />
              </Route>
            </header>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
