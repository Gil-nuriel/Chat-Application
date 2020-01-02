import React, { Fragment, Component } from "react";

export class NavBar extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <i className="fa fa-home" style={{ fontSize: "30px" }}></i>
        </a>
        <form className="form-inline text-white">
          {this.props.user ? (
            <Fragment>
              <h4>{this.props.user.name}</h4>
              <button
                className="btn btn-outline-light ml-5"
                onClick={() => this.logOut()}
              >
                Logout
              </button>
            </Fragment>
          ) : (
            "Anonymous"
          )}
        </form>
      </nav>
    );
  }
}

export default NavBar;
