import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Deal from "./components/Deal/Deal";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Cosmetic from "./components/Cosmetic/Cosmetic";
import Checkout from "./components/Checkout/Checkout";
import OrderSuccessfull from "./components/OrderSuccessfull/OrderSuccessfull";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="container">
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/deal">
              <Deal></Deal>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/cosmetic/:makeupType">
              <Cosmetic></Cosmetic>
            </PrivateRoute>
            <PrivateRoute path="/orderSuccess/:id">
              <OrderSuccessfull></OrderSuccessfull>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
