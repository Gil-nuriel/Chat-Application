import React, { Fragment, Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export class Login extends Component {
  state = {
    LoginEmail: null,
    LoginPassword: null,
    jwt: null
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: this.state.LoginEmail,
        password: this.state.LoginPassword
      })
      .then(res => {
        this.setState({ jwt: res.data.token });
        localStorage.setItem("token", this.state.jwt);
        window.location = "/chat";
      })
      .catch(err => {
        if (err.response.status === 400) {
          toast.error("Fill all the fields");
        }
        if (err.response.status === 401) {
          toast.error("Invalid email or password");
        }
      });
  };

  render() {
    return (
      <Fragment>
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5 text-white bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                        onChange={e =>
                          this.setState({ LoginEmail: e.target.value })
                        }
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={e =>
                          this.setState({ LoginPassword: e.target.value })
                        }
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Login;
