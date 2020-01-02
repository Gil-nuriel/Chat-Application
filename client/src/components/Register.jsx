import React, { Fragment, Component } from "react";
import { ToastContainer, toast } from "react-toastify";

export class Register extends Component {
  state = {
    Error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    //validation
    const isValid = this.validate();
    if (isValid) {
      this.props.nextStep();
    }
  };

  validate = () => {
    let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const { values } = this.props;
    if (
      !values.Name ||
      !values.Email ||
      !values.Password ||
      !values.confirmPassword
    ) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (values.Name.length < 3 || values.Name.length > 50) {
      toast.error("Name should be between 3 to 50 characters");
      return false;
    }
    if (!reg.test(values.Email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (values.Password.length < 8 || values.Password.length > 500) {
      toast.error("Password should be above 7 characters");
      return false;
    }
    if (values.Password !== values.confirmPassword) {
      toast.error("Passwords not match");
      return false;
    }
    return true;
  };

  handleSubmit2 = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5 text-white bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <div className="form-label-group">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputUserame"
                            className="form-control"
                            required
                            autoFocus
                            onChange={handleChange("Name")}
                            defaultValue={values.Name}
                          />
                          <label htmlFor="inputUserame">Username</label>
                        </div>
                        <div className="form-label-group">
                          <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            required
                            onChange={handleChange("Email")}
                            defaultValue={values.Email}
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            onChange={handleChange("Password")}
                            defaultValue={values.Password}
                            required
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className="form-label-group">
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            onChange={handleChange("confirmPassword")}
                            defaultValue={values.confirmPassword}
                            required
                          />
                          <label htmlFor="confirmPassword">
                            {" "}
                            Confirm Password
                          </label>
                        </div>
                        <hr className="my-4" />
                        <button
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                          onClick={this.handleSubmit}
                        >
                          Next
                        </button>
                        <button
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                          onClick={this.handleSubmit2}
                        >
                          Back
                        </button>
                      </div>
                    </div>
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
export default Register;
