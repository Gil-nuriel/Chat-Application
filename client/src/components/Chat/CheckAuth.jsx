import React, { Fragment } from "react";
import axios from "axios";

function CheckAuth() {
  function handleAuth() {
    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
      "token"
    );
    axios
      .get("http://localhost:5000/chat", {
        token: localStorage.getItem("token")
      })
      .then(res => {
        if (res.status === 200) {
          alert("authorize");
        }
      })
      .catch(err => {
        alert("not authorize");
      });
  }

  return (
    <Fragment>
      <button
        className="btn btn-lg btn-secondary text-uppercase mt-5"
        onClick={handleAuth}
      >
        Check Authirization to the server
      </button>
    </Fragment>
  );
}
export default CheckAuth;
