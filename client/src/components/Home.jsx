import React, { Fragment, Component } from "react";

export class Home extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit2 = e => {
    e.preventDefault();
    this.props.login();
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5 text-white bg-dark">
                <div className="card-body">
                  <h5 className="card-title text-center">Home page</h5>
                  <form className="form-signin">
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit2}
                    >
                      Sign in
                    </button>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Register
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
export default Home;
