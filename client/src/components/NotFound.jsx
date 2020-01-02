import React, { Fragment, Component } from "react";

export class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <div class="container text-center">
          <h1 class="mt-5 text-white font-weight-light">
            This page does not exist
          </h1>
        </div>
      </Fragment>
    );
  }
}
export default NotFound;
