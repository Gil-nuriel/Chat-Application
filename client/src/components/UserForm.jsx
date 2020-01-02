import React, { Component } from "react";
import Home from "./Home";
import Register from "./Register";
import Confirm from "./Confirm";
import Success from "./Success";
import Login from "./Login";
import Chat from "./Chat/Chat";

export class UserForm extends Component {
  state = {
    step: 1,
    Name: "",
    Email: "",
    Password: "",
    confirmPassword: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  firstStep = () => {
    this.setState({
      step: 1,
      Name: "",
      Email: "",
      Password: "",
      confirmPassword: ""
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  login = () => {
    const { step } = this.state;
    this.setState({ step: step + 0.5 });
  };

  render() {
    const { step, Name, Email, Password, confirmPassword } = this.state;
    const values = { Name, Email, Password, confirmPassword };
    if (localStorage.getItem("token")) {
      return <Chat />;
    }
    switch (step) {
      case 1:
        return (
          <Home nextStep={this.nextStep} login={this.login} values={values} />
        );
      case 2:
        return (
          <Register
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success firstStep={this.firstStep} />;
      case 1.5:
        return <Login />;
      default:
        break;
    }
  }
}

export default UserForm;
