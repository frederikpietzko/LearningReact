import React from "react";

const Spinner = props => {
  return (
    <div
      className="ui active dimmer"
      style={{ width: "100%", height: "300px" }}
    >
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
