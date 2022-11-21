import React, { useState } from "react";
import HeaderToggle from "./Components/HeaderToggle";
import BoxContainer from "./Components/BoxContainer";

const App = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(false);
  const toggleHandler = (value) => {
    setMonthlyPricing(value);
  };
  return (
    <div className="app-container">
      <HeaderToggle toggleHandler={toggleHandler} />
      <BoxContainer isMonthly={monthlyPricing} />
    </div>
  );
};

export default App;
