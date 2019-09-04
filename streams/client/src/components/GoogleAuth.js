import React, { Component } from "react";
import clientId from "./cred";
export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId,
        scope: "email"
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}
