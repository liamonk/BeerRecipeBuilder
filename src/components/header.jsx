import React from "react";

export default function Header() {
  const headerStyle = {
    display: "flex",
    backgroundColor: "grey",
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>BEER!!!!</h1>
    </div>
  );
}
