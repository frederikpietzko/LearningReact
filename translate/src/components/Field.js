import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="ui field">
        <label> {this.context.language === "english" ? "Name" : "Naam"}</label>
        <input />
      </div>
    );
  }
}
