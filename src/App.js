import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
