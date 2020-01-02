import React, { Fragment, Component } from "react";

export class Success extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.firstStep();
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5 text-white bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">User Created</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <h6>You have successfully register</h6>
                    </div>
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Login
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
export default Success;
