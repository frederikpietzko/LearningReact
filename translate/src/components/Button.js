import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default () => {
  // the consumer Component also works with functional Components! i also tried out to do it via the other system used in Field.js and it didnt work...
  // but this Component also works in class based ones of corse

  // The Consumer component is that you can pull multiple contexts! but then the function would need to actually return all the jsx. Solution would be a helper function.
  return (
    <ColorContext.Consumer>
      {color => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {({language}) => (language === "english" ? "Submit" : "Voorleggen")}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};
