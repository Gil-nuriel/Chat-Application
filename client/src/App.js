import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { UserForm } from "./components/UserForm";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./components/NotFound";
import Chat from "./components/Chat/Chat";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(atob(token.split(".")[1]));
      this.setState({ user });
    } catch (err) {}
  }

  checkPremision = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <div className="container">
          <Switch>
            <Route
              path="/chat"
              render={() => {
                if (!this.checkPremision()) {
                  return <Redirect to="/" />;
                }
                return <Chat />;
              }}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/" component={UserForm} user={this.state.user} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
