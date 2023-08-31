import React from "react";

export default function Malt(props) {
  return (
    <div
      className="Malts"
      style={{ display: "flex", padding: "5px", overflow: "auto" }}
    >
      <h4 style={{ margin: "auto" }}>Malt</h4>
      <input
        style={{ margin: "auto" }}
        value={props.ingredients.malt[0]}
        name="malt"
        onChange={props.handleChange}
      ></input>
      <h4 style={{ margin: "auto" }}>Weight</h4>
      <input
        style={{ margin: "auto" }}
        value={props.ingredients.maltWeight[0]}
        name="maltWeight"
        onChange={props.handleChange}
      ></input>
      <br></br>
    </div>
  );
}
