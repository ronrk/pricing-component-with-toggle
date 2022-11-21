import React from "react";
import Wrapper from "./HeaderToggle.styled";

const HeaderToggle = ({ toggleHandler }) => {
  const onToggle = (e) => {
    const { checked } = e.target;
    toggleHandler(checked);
  };

  return (
    <Wrapper>
      <h2>our pricing</h2>
      <div className="toggle-container">
        <label htmlFor="monthly">annually</label>
        <input
          type="checkbox"
          name="monthly"
          value="monthly"
          id="monthly"
          onChange={onToggle}
        />
        <label htmlFor="monthly">monthly</label>
      </div>
    </Wrapper>
  );
};

export default HeaderToggle;
