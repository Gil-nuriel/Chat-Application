import React, { Fragment, Component } from "react";
import axios from "axios";

export class Confirm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //send request to express
    const {
      values: { Name, Email, Password }
    } = this.props;
    axios
      .post("http://localhost:5000/register", {
        name: Name,
        email: Email,
        password: Password
      })
      .then(res => {
        this.props.nextStep();
      })
      .catch(err => {
        if (err.response.status === 405) {
          alert("use allreadt exist");
          this.props.prevStep();
        }
      });
  };
  handleSubmit2 = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { Name, Email }
    } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5 text-white bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Confirm information
                  </h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <h3>User Name</h3>
                      <p>{Name}</p>
                      <h3>Email</h3>
                      <p>{Email}</p>
                    </div>
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Confirm
                    </button>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit2}
                    >
                      Back
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
export default Confirm;
