import React from "react";
import Malt from "./malt";

export default function Calculator() {
  const [ingredients, updateIngredients] = React.useState({
    malt: ["Enter your malt"],
    maltWeight: [4],
    hops: ["Enter your hop"],
    hopWeight: [0],
    yeast: {},
    other: {},
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateIngredients((oldIngredients) => ({
      ...oldIngredients,
      [name]: value,
    }));
  }

  function addIngredient(event) {
    const { name, value } = event.target;
    updateIngredients((oldIngredients) => ({
      ...oldIngredients,
      malt: [...oldIngredients.malt, "new malt"],
      maltWeight: [...oldIngredients.maltWeight, 0],
    }));
  }

  const malts = ingredients.malt.map((malts) => {
    return (
      <Malt key="" ingredients={ingredients} handleChange={handleChange} />
    );
  });

  return (
    <div>
      <h1>Malts</h1>
      {malts}
      <button onClick={addIngredient}>+</button>
      <div className="hops"></div>
    </div>
  );
}
